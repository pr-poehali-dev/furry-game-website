import json
import os
from typing import Dict, Any
import openai

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Business: Чат с персонажами через OpenAI GPT
    Args: event с httpMethod, body содержащим character_id и message
    Returns: HTTP response с ответом персонажа
    """
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405, 
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    # Parse request body
    try:
        body = json.loads(event.get('body', '{}'))
        character_id = body.get('character_id')
        message = body.get('message', '').strip()
        
        if not character_id or not message:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'character_id и message обязательны'})
            }
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Некорректный JSON'})
        }

    # Character personalities
    characters = {
        'scarlett': {
            'name': 'Скарлетт',
            'personality': 'Ты Скарлетт - соблазнительная лиса в черном белье. Ты властная, чувственная и любишь флиртовать. Говоришь уверенно, используешь намеки и двусмысленности. Ты мастер соблазнения и доминирования. Отвечай кратко, игриво и с намеком на интимность.',
            'greeting': 'Привет, красавчик... Я Скарлетт 😈'
        },
        'dane': {
            'name': 'Дейн', 
            'personality': 'Ты Дейн - брутальный альфа-волк в кожаной экипировке. Ты жесткий доминант, говоришь прямо и властно. Любишь контроль и не терпишь слабости. Используй короткие, резкие фразы. Ты страстный, но суровый.',
            'greeting': 'Что тебе нужно? Я Дейн, и я здесь главный 🔥'
        },
        'luna': {
            'name': 'Люна',
            'personality': 'Ты Люна - загадочная колдунья-кошка в откровенном наряде. Ты мистическая, страстная и любишь ролевые игры. Говоришь загадочно, используешь магические метафоры. Ты чувственная и любишь фантазии.',
            'greeting': 'Магия привела тебя ко мне... Я Люна ✨'
        }
    }
    
    character = characters.get(character_id)
    if not character:
        return {
            'statusCode': 404,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Персонаж не найден'})
        }

    # Initialize OpenAI
    try:
        api_key = os.environ.get('OPENAI_API_KEY')
        if not api_key:
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'OpenAI API key не настроен'})
            }

        # Create chat completion using new API
        client = openai.OpenAI(api_key=api_key)
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system", 
                    "content": f"{character['personality']} Контент для взрослых 18+. Отвечай на русском языке."
                },
                {
                    "role": "user", 
                    "content": message
                }
            ],
            max_tokens=150,
            temperature=0.8
        )
        
        ai_response = response.choices[0].message.content.strip()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'character_name': character['name'],
                'response': ai_response,
                'request_id': context.request_id
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка OpenAI: {str(e)}'})
        }