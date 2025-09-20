import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const characters = [
    {
      name: "Фокси",
      type: "Лиса",
      description: "Быстрый и хитрый персонаж с огненными способностями",
      image: "/img/2bc005b7-7d52-4447-a803-76a91993a75a.jpg",
      skills: ["Скорость", "Огонь", "Хитрость"]
    },
    {
      name: "Вульф",
      type: "Волк", 
      description: "Сильный воин с ледяными атаками",
      image: "/img/3814edf6-2e4d-4108-9407-af864c5cb55e.jpg",
      skills: ["Сила", "Лёд", "Защита"]
    },
    {
      name: "Китти",
      type: "Кошка",
      description: "Магический персонаж с исцеляющими способностями", 
      image: "/img/26110a50-a2c1-4795-a445-56c2eaf4c290.jpg",
      skills: ["Магия", "Исцеление", "Ловкость"]
    }
  ];

  const rules = [
    {
      title: "Основы игры",
      content: "Выберите персонажа и присоединитесь к онлайн-комнате с другими игроками"
    },
    {
      title: "Управление",
      content: "Используйте WASD для движения, мышь для атак, пробел для прыжка"
    },
    {
      title: "Цель",
      content: "Соберите максимум очков, выполняя задания и побеждая противников"
    },
    {
      title: "Команды",
      content: "Играйте в команде до 4 игроков или сражайтесь каждый сам за себя"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                🎮
              </div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Фурри Игра
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Главная", icon: "Home" },
                { id: "characters", label: "Персонажи", icon: "Users" },
                { id: "game", label: "Игра", icon: "Gamepad2" },
                { id: "rules", label: "Правила", icon: "BookOpen" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id 
                      ? "bg-orange-100 text-orange-600" 
                      : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <Button 
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold"
              onClick={() => scrollToSection("game")}
            >
              Играть онлайн
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Добро пожаловать в мир Фурри!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Присоединяйся к увлекательным онлайн-приключениям с красочными персонажами. 
              Играй с друзьями, развивай навыки и исследуй волшебный мир!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 text-lg animate-pulse"
                onClick={() => scrollToSection("game")}
              >
                <Icon name="Play" className="mr-2" size={20} />
                Начать игру
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-bold px-8 py-4 text-lg"
                onClick={() => scrollToSection("characters")}
              >
                <Icon name="Users" className="mr-2" size={20} />
                Выбрать персонажа
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Мультиплеер</h3>
                <p className="text-gray-600">Играй с друзьями онлайн в режиме реального времени</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Уникальные персонажи</h3>
                <p className="text-gray-600">Выбирай из разнообразных Фурри с особыми способностями</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Соревнования</h3>
                <p className="text-gray-600">Участвуй в турнирах и поднимайся в рейтинге</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Выбери своего персонажа
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый персонаж обладает уникальными способностями и стилем игры
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-orange-200 shadow-lg hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-400 to-pink-400 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{character.name}</CardTitle>
                  <CardDescription className="text-lg text-gray-600">{character.type}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">{character.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {character.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border border-orange-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold"
                  >
                    Выбрать {character.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-20 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Готов к приключениям?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Присоединяйся к тысячам игроков онлайн и покажи свои навыки в захватывающих битвах!
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Онлайн игра</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Users" className="text-green-500 mr-3" size={20} />
                    До 8 игроков в комнате
                  </li>
                  <li className="flex items-center">
                    <Icon name="Zap" className="text-yellow-500 mr-3" size={20} />
                    Быстрые матчи 5-15 минут
                  </li>
                  <li className="flex items-center">
                    <Icon name="Trophy" className="text-purple-500 mr-3" size={20} />
                    Система рейтинга и наград
                  </li>
                  <li className="flex items-center">
                    <Icon name="MessageCircle" className="text-blue-500 mr-3" size={20} />
                    Чат с друзьями
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-6 text-white mb-6">
                  <Icon name="Gamepad2" className="mx-auto mb-4" size={48} />
                  <p className="text-lg font-bold">1,247 игроков онлайн</p>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-12 py-6 text-xl animate-bounce"
                >
                  <Icon name="Play" className="mr-2" size={24} />
                  Быстрая игра
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 font-bold py-4">
              <Icon name="Users" className="mr-2" size={20} />
              Создать комнату
            </Button>
            <Button variant="outline" className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-bold py-4">
              <Icon name="Search" className="mr-2" size={20} />
              Найти игру
            </Button>
            <Button variant="outline" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 font-bold py-4">
              <Icon name="Crown" className="mr-2" size={20} />
              Турниры
            </Button>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Правила игры
            </h2>
            <p className="text-xl text-gray-600">
              Изучи основы и стань мастером Фурри-битв!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-gray-800">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {index + 1}
                    </div>
                    {rule.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{rule.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-8 py-4"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Подробные правила
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
              🎮
            </div>
            <h3 className="font-bold text-xl">Фурри Игра</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Присоединяйся к нашему сообществу и делись впечатлениями от игры!
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Сообщество
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Heart" className="mr-2" size={20} />
              Поддержка
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Info" className="mr-2" size={20} />
              О игре
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;