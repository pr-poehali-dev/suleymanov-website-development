import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo via-pink to-emerald opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              SULEYMANOV — Web Studio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Разработка сайтов
              <br />
              нового уровня
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-body">
              Создаем современные веб-решения с фокусом на процесс, скорость, поддержку и безупречный дизайн
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Полный цикл разработки от идеи до запуска
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <CardTitle className="font-display">Процесс</CardTitle>
                <CardDescription className="font-body">
                  Прозрачная методология разработки с регулярными отчетами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <CardTitle className="font-display">Скорость</CardTitle>
                <CardDescription className="font-body">
                  Быстрая разработка без ущерба качеству. MVP за 2 недели
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Headphones" size={32} className="text-white" />
                </div>
                <CardTitle className="font-display">Поддержка</CardTitle>
                <CardDescription className="font-body">
                  Техническая поддержка 24/7 и постоянное развитие проекта
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pink/20 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink to-indigo rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <CardTitle className="font-display">Дизайн</CardTitle>
                <CardDescription className="font-body">
                  Современный UI/UX дизайн, адаптивная верстка и анимации
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Примеры наших работ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/60 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button size="sm" className="w-full bg-white/90 text-gray-900 hover:bg-white">
                        Посмотреть проект
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2">Проект {item}</h3>
                  <p className="text-gray-600 font-body">Описание проекта и использованных технологий</p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Обо мне
              </h2>
              <p className="text-xl text-gray-600 mb-6 font-body">
                Я — SULEYMANOV, веб-разработчик с 5+ лет опыта создания современных цифровых решений. 
                Специализируюсь на React, TypeScript и современных веб-технологиях.
              </p>
              <p className="text-lg text-gray-600 mb-8 font-body">
                Мой подход — это сочетание технического мастерства, креативного мышления и клиентоориентированности. 
                Каждый проект уникален, поэтому я всегда нахожу индивидуальное решение для ваших задач.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Next.js", "Tailwind", "PostgreSQL"].map((tech) => (
                  <Badge key={tech} className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl opacity-20"></div>
              <div className="absolute inset-8 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <Icon name="User" size={64} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 font-body">
              Ответы на популярные вопросы о разработке
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="font-display text-left hover:no-underline">
                Сколько времени занимает разработка сайта?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                Время разработки зависит от сложности проекта. Простой лендинг — 1-2 недели, 
                корпоративный сайт — 3-4 недели, сложное веб-приложение — от 6 недель.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="font-display text-left hover:no-underline">
                Какие технологии вы используете?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                Работаю с современным стеком: React, TypeScript, Next.js, Node.js, Tailwind CSS, 
                PostgreSQL, MongoDB. Выбираю технологии исходя из задач проекта.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="font-display text-left hover:no-underline">
                Предоставляете ли вы техническую поддержку?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                Да, предоставляю полную техническую поддержку: хостинг, обновления, исправления, 
                добавление нового функционала. Работаю по гибким тарифам поддержки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="font-display text-left hover:no-underline">
                Как происходит процесс разработки?
              </AccordionTrigger>
              <AccordionContent className="font-body text-gray-600">
                1. Анализ требований и планирование
                2. Создание дизайн-макетов
                3. Разработка и тестирование
                4. Запуск и передача проекта
                5. Поддержка и развитие
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 font-body">
              Готов обсудить ваш проект
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-2 border-primary/10">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="font-display text-2xl">Свяжитесь со мной</CardTitle>
                <CardDescription className="font-body">
                  Заполните форму, и я свяжусь с вами в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium font-body">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium font-body">Email</label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium font-body">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Email</h3>
                  <p className="text-gray-600 font-body">hello@suleymanov.dev</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Телефон</h3>
                  <p className="text-gray-600 font-body">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Telegram</h3>
                  <p className="text-gray-600 font-body">@suleymanov_dev</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-display font-semibold text-lg mb-4">Социальные сети</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/5">
                    <Icon name="Github" size={20} className="text-primary" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-secondary/20 hover:bg-secondary/5">
                    <Icon name="Linkedin" size={20} className="text-secondary" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-accent/20 hover:bg-accent/5">
                    <Icon name="Twitter" size={20} className="text-accent" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="font-display text-2xl font-bold mb-4">SULEYMANOV</h3>
          <p className="text-gray-400 font-body mb-6">Разработка сайтов нового уровня</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm font-body">
            © 2024 SULEYMANOV. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}