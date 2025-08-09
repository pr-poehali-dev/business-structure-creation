import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">
              BizConsult
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-slate-600 hover:text-primary transition-colors">О нас</a>
              <a href="#methodology" className="text-slate-600 hover:text-primary transition-colors">Методология</a>
              <a href="#blog" className="text-slate-600 hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4" variant="outline">
              <Icon name="Award" size={14} className="mr-1" />
              Профессиональное консультирование
            </Badge>
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Выстраиваем
              <span className="text-primary"> процессы </span>
              вашего бизнеса
            </h1>
            <p className="font-body text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Создаем эффективную оргструктуру, разрабатываем регламенты и помогаем в развитии вашей команды. 
              Превращаем хаос в систему, которая работает.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Icon name="Calendar" size={18} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Play" size={18} className="mr-2" />
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Наши услуги
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-2xl mx-auto">
              Комплексный подход к развитию бизнес-процессов и организационной структуры
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Оргструктура</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Проектирование и оптимизация организационной структуры компании
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Регламенты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Разработка документооборота и стандартизация бизнес-процессов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Развитие бизнеса</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Стратегическое планирование и масштабирование деятельности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">HR-поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Управление персоналом и развитие командной эффективности
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                <Icon name="Target" size={14} className="mr-1" />
                О компании
              </Badge>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Превращаем идеи в работающие системы
              </h2>
              <p className="font-body text-lg text-slate-600 mb-6">
                Более 10 лет помогаем компаниям выстраивать эффективные бизнес-процессы. 
                Наша команда экспертов знает, как превратить хаотичные операции в отлаженную систему.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3" />
                  <span className="font-body">Более 200 успешных проектов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3" />
                  <span className="font-body">Команда сертифицированных консультантов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3" />
                  <span className="font-body">Индивидуальный подход к каждому клиенту</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/630607f3-3941-4320-b4ee-67fa90727d95.jpg" 
                alt="Команда консультантов за работой"
                className="aspect-square object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Наша методология
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-2xl mx-auto">
              Проверенный подход к трансформации бизнес-процессов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-sans text-xl font-semibold text-slate-800 mb-3">Анализ</h3>
              <p className="font-body text-slate-600">
                Глубокое изучение текущего состояния процессов и выявление точек роста
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-sans text-xl font-semibold text-slate-800 mb-3">Проектирование</h3>
              <p className="font-body text-slate-600">
                Создание оптимальной структуры и разработка регламентирующих документов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-sans text-xl font-semibold text-slate-800 mb-3">Внедрение</h3>
              <p className="font-body text-slate-600">
                Поэтапная реализация изменений с постоянной поддержкой команды
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Полезные материалы
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-2xl mx-auto">
              Экспертные статьи о развитии бизнеса и оптимизации процессов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2">Процессы</Badge>
                <CardTitle className="text-lg">Как выстроить эффективную оргструктуру</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Пошаговое руководство по созданию организационной структуры, которая масштабируется...
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2">HR</Badge>
                <CardTitle className="text-lg">Мотивация команды в период изменений</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Практические инструменты для поддержания вовлеченности сотрудников...
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2">Стратегия</Badge>
                <CardTitle className="text-lg">5 ошибок при масштабировании бизнеса</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Типичные проблемы растущих компаний и способы их предотвращения...
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Получите бесплатную консультацию
            </h2>
            <p className="font-body text-lg text-slate-600">
              Расскажите о своих задачах, и мы предложим оптимальное решение
            </p>
          </div>

          <Card className="border-2 border-primary/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Петров"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@company.ru"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Расскажите о своих задачах *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите вашу ситуацию и цели..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-sans font-bold text-xl mb-4">BizConsult</h3>
              <p className="font-body text-slate-300">
                Профессиональное консультирование по развитию бизнеса и оптимизации процессов
              </p>
            </div>
            
            <div>
              <h4 className="font-sans font-semibold mb-4">Услуги</h4>
              <ul className="font-body space-y-2 text-slate-300">
                <li>Оргструктура</li>
                <li>Регламенты</li>
                <li>HR-поддержка</li>
                <li>Развитие бизнеса</li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold mb-4">Компания</h4>
              <ul className="font-body space-y-2 text-slate-300">
                <li>О нас</li>
                <li>Методология</li>
                <li>Кейсы</li>
                <li>Блог</li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold mb-4">Контакты</h4>
              <div className="font-body space-y-2 text-slate-300">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@bizconsult.ru
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="font-body text-slate-400">
              © 2024 BizConsult. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}