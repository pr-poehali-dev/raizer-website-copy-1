import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RaizerDLC
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Связаться</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-fade-in">
            Цифровые решения
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              нового поколения
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Создаем современные веб-приложения, дизайн и digital-продукты, 
            которые помогают бизнесу расти и развиваться
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="group">
              Начать проект
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline">
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-center mb-16">
            Наши услуги
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Code',
                title: 'Веб-разработка',
                description: 'Современные веб-приложения на React, Vue, Next.js с адаптивным дизайном и высокой производительностью'
              },
              {
                icon: 'Palette',
                title: 'UI/UX Дизайн',
                description: 'Интуитивные интерфейсы, которые нравятся пользователям и повышают конверсию вашего продукта'
              },
              {
                icon: 'Smartphone',
                title: 'Мобильные приложения',
                description: 'Нативные и кроссплатформенные приложения для iOS и Android с безупречным UX'
              },
              {
                icon: 'TrendingUp',
                title: 'Digital маркетинг',
                description: 'SEO-оптимизация, аналитика и продвижение для роста вашего онлайн-присутствия'
              },
              {
                icon: 'Zap',
                title: 'Автоматизация',
                description: 'Оптимизация бизнес-процессов через интеграции, API и автоматизированные решения'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка',
                description: 'Техническая поддержка 24/7, обновления и сопровождение ваших проектов'
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold font-heading mb-3">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Мы создаем <span className="text-primary">digital-продукты</span> с душой
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                RaizerDLC — это команда опытных разработчиков, дизайнеров и маркетологов, 
                которые влюблены в свое дело. Мы не просто пишем код — мы создаем решения, 
                которые помогают бизнесу достигать целей.
              </p>
              <div className="space-y-4">
                {[
                  { number: '150+', label: 'Завершенных проектов' },
                  { number: '5+', label: 'Лет опыта' },
                  { number: '98%', label: 'Довольных клиентов' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-2xl font-bold text-primary">{stat.number}</span>
                    <span className="text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <Icon name="Sparkles" className="text-primary" size={120} />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Давайте создадим что-то <span className="text-primary">великое</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Расскажите о своем проекте, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group">
                  Отправить заявку
                  <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold font-heading text-xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                RaizerDLC
              </h4>
              <p className="text-muted-foreground text-sm">
                Создаем цифровые решения для вашего успеха
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мобильные приложения</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@raizerdlc.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 RaizerDLC. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
