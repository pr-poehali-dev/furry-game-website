import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const characters = [
    {
      name: "Скарлетт",
      type: "Элитная Лиса",
      description: "Роковая красотка в черном белье. Мастер соблазнения и тайных игр",
      image: "/img/4b60bccc-7127-45fa-b931-00d226beab89.jpg",
      skills: ["Соблазнение", "Доминирование", "Фетиш-игры"],
      rating: "18+",
      personality: "Властная и чувственная"
    },
    {
      name: "Дейн", 
      type: "Альфа Волк",
      description: "Брутальный лидер в кожаной экипировке. Жесткий доминант с страстным нравом",
      image: "/img/34147390-dbc3-42a7-ab5f-104e29ca47c1.jpg",
      skills: ["БДСМ", "Доминирование", "Грубые игры"],
      rating: "18+",
      personality: "Жесткий и неумолимый"
    },
    {
      name: "Люна",
      type: "Темная Колдунья",
      description: "Мистическая красавица в откровенном наряде. Покорит магией и страстью",
      image: "/img/2e546767-1dc4-4c30-a308-5f105772a415.jpg", 
      skills: ["Магия любви", "Ролевые игры", "Фантазии"],
      rating: "18+",
      personality: "Загадочная и страстная"
    }
  ];

  const features = [
    {
      title: "Взрослый контент",
      content: "Интимные сцены, романтические линии и эротические элементы для зрелой аудитории"
    },
    {
      title: "Психология персонажей",
      content: "Глубокие характеры с темными мотивами, страстями и сложными отношениями"
    },
    {
      title: "Реалистичные отношения",
      content: "Система романтики с множественными партнерами и различными формами близости"
    },
    {
      title: "Приватные комнаты",
      content: "Эксклюзивные пространства для интимного общения между игроками 18+"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Age Warning */}
      <div className="fixed top-0 left-0 right-0 z-60 bg-red-600/90 backdrop-blur-md border-b border-red-400 text-center py-2">
        <p className="text-sm font-bold text-white">⚠️ КОНТЕНТ 18+ • ТОЛЬКО ДЛЯ ВЗРОСЛЫХ • ADULT CONTENT ⚠️</p>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center neon-glow">
                🔥
              </div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Furrverse 18+
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Главная", icon: "Home" },
                { id: "characters", label: "Персонажи", icon: "Users" },
                { id: "experience", label: "Опыт", icon: "Heart" },
                { id: "features", label: "Возможности", icon: "Lock" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? "bg-pink-500/20 text-pink-400 neon-glow" 
                      : "text-gray-300 hover:text-pink-400 hover:bg-pink-500/10"
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <Button 
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold neon-glow"
              onClick={() => scrollToSection("experience")}
            >
              <Icon name="Lock" className="mr-2" size={16} />
              Войти 18+
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-6">
              <Badge className="bg-red-600/20 text-red-400 border border-red-400 text-lg px-4 py-2 mb-4">
                ТОЛЬКО ДЛЯ ВЗРОСЛЫХ 18+
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Добро пожаловать в Furrverse
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Погрузитесь в мир интимных приключений и страстных отношений. 
              Эксклюзивная вселенная для взрослых с глубокими персонажами и реалистичными эмоциями.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg neon-glow"
                onClick={() => scrollToSection("experience")}
              >
                <Icon name="Heart" className="mr-2" size={20} />
                Начать опыт
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-500/10 font-bold px-8 py-4 text-lg"
                onClick={() => scrollToSection("characters")}
              >
                <Icon name="Users" className="mr-2" size={20} />
                Выбрать партнера
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="glass-effect rounded-2xl p-6 border border-pink-500/20 shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-pink-400">Интимное общение</h3>
                <p className="text-gray-400">Приватные комнаты для взрослых бесед и романтических встреч</p>
              </div>
              
              <div className="glass-effect rounded-2xl p-6 border border-purple-500/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-purple-400">Страстные сюжеты</h3>
                <p className="text-gray-400">Глубокие романтические линии с элементами для взрослых</p>
              </div>
              
              <div className="glass-effect rounded-2xl p-6 border border-indigo-500/20 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <Icon name="Lock" className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-indigo-400">Эксклюзивный контент</h3>
                <p className="text-gray-400">Премиум материалы и функции только для совершеннолетних</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 glass-effect">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Выберите своего партнера
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Каждый персонаж обладает уникальной личностью и предпочтениями для взрослых отношений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 glass-effect border-2 border-transparent hover:border-pink-500/50 shadow-lg hover:shadow-pink-500/20">
                <CardHeader className="text-center">
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-500/50 group-hover:border-pink-400 group-hover:shadow-pink-500/50 group-hover:shadow-lg transition-all duration-300 neon-glow">
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-red-600 text-white">
                      {character.rating}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-pink-400">{character.name}</CardTitle>
                  <CardDescription className="text-lg text-purple-400">{character.type}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-3">{character.description}</p>
                  <p className="text-pink-300 text-sm mb-4 italic">{character.personality}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {character.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="bg-gradient-to-r from-red-600/30 to-pink-600/30 text-red-300 border border-red-500/50 hover:bg-red-500/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold neon-glow"
                  >
                    <Icon name="Heart" className="mr-2" size={16} />
                    Познакомиться с {character.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Готовы к незабываемому опыту?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Окунитесь в мир страсти и близости с тысячами взрослых игроков онлайн
          </p>

          <div className="glass-effect rounded-3xl p-8 mb-8 shadow-xl border border-pink-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Взрослые встречи</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Icon name="Heart" className="text-red-500 mr-3" size={20} />
                    Приватные комнаты для двоих
                  </li>
                  <li className="flex items-center">
                    <Icon name="Users" className="text-pink-500 mr-3" size={20} />
                    Групповые интимные сессии
                  </li>
                  <li className="flex items-center">
                    <Icon name="MessageCircle" className="text-purple-500 mr-3" size={20} />
                    Эротический чат и ролевые игры
                  </li>
                  <li className="flex items-center">
                    <Icon name="Camera" className="text-indigo-500 mr-3" size={20} />
                    Видео-звонки с персонажами
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-6 text-white mb-6 neon-glow">
                  <Icon name="Users" className="mx-auto mb-4" size={48} />
                  <p className="text-lg font-bold">2,847 взрослых онлайн</p>
                  <p className="text-sm opacity-80">Ищут интимного общения</p>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-xl neon-glow"
                >
                  <Icon name="Heart" className="mr-2" size={24} />
                  Войти в 18+ зону
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="border-2 border-pink-500/50 text-pink-400 hover:bg-pink-500/10 font-bold py-4">
              <Icon name="Lock" className="mr-2" size={20} />
              Приватная комната
            </Button>
            <Button variant="outline" className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-bold py-4">
              <Icon name="Search" className="mr-2" size={20} />
              Найти партнера
            </Button>
            <Button variant="outline" className="border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 font-bold py-4">
              <Icon name="Crown" className="mr-2" size={20} />
              VIP-доступ
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 glass-effect">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Эксклюзивные возможности
            </h2>
            <p className="text-xl text-gray-300">
              Откройте новые грани интимности и страсти в нашей взрослой вселенной
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border border-pink-500/20 shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-pink-400">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3 neon-glow">
                      {index + 1}
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 neon-glow"
            >
              <Icon name="Crown" className="mr-2" size={20} />
              Получить VIP-доступ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 text-white py-12 border-t border-pink-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center neon-glow">
              🔥
            </div>
            <h3 className="font-bold text-xl text-pink-400">Furrverse 18+</h3>
          </div>
          
          <div className="mb-6">
            <Badge className="bg-red-600/20 text-red-400 border border-red-400 px-4 py-2">
              КОНТЕНТ ТОЛЬКО ДЛЯ ВЗРОСЛЫХ 18+
            </Badge>
          </div>
          
          <p className="text-gray-400 mb-6">
            Эксклюзивное сообщество для зрелых отношений и интимного общения
          </p>
          
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-gray-400 hover:text-pink-400">
              <Icon name="Shield" className="mr-2" size={20} />
              Конфиденциальность
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-pink-400">
              <Icon name="Heart" className="mr-2" size={20} />
              Поддержка
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-pink-400">
              <Icon name="AlertTriangle" className="mr-2" size={20} />
              Правила 18+
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;