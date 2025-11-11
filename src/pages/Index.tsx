import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState<'main' | 'register' | 'buy'>('main');
  const [registerData, setRegisterData] = useState({
    nickname: '',
    email: '',
    password: ''
  });

  const subscriptions = [
    {
      id: 1,
      name: '1 Месяц',
      price: '180₽',
      duration: '30 дней',
      icon: 'Calendar',
      popular: false
    },
    {
      id: 2,
      name: '180 Дней',
      price: '280₽',
      duration: '6 месяцев',
      icon: 'TrendingUp',
      popular: true,
      discount: '-53%'
    },
    {
      id: 3,
      name: 'Навсегда',
      price: '480₽',
      duration: 'Lifetime',
      icon: 'Crown',
      popular: false
    }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Регистрация успешна!",
      description: `Добро пожаловать, ${registerData.nickname}!`,
    });
    setActiveSection('buy');
  };

  const handleBuy = (subscription: typeof subscriptions[0]) => {
    toast({
      title: "Подписка оформлена!",
      description: `Подписка ${subscription.name} активирована`,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RaizerDLC
          </h1>
          <div className="flex gap-4 md:gap-8 items-center">
            <button onClick={() => setActiveSection('main')} className="hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => setActiveSection('buy')} className="hover:text-primary transition-colors">
              Покупка
            </button>
            <button onClick={() => setActiveSection('register')} className="hover:text-primary transition-colors">
              Регистрация
            </button>
            <a href="#contact" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {activeSection === 'main' && (
        <>
          <section className="pt-32 pb-20 px-6">
            <div className="container mx-auto text-center">
              <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 text-primary border-primary">
                #1 ЧИТ ДЛЯ REALLYWORLD & BRAVOHVH
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-fade-in">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  RaizerDLC
                </span>
                <br />
                Лучший чит на рынке
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
                Профессиональный чит для ReallyWorld и BravoHVH с поддержкой 24/7 
                и самыми выгодными ценами на рынке
              </p>
              <div className="flex gap-4 justify-center animate-scale-in flex-wrap">
                <Button size="lg" onClick={() => setActiveSection('buy')} className="group">
                  Купить подписку
                  <Icon name="ShoppingCart" className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('register')}>
                  Регистрация
                </Button>
              </div>
            </div>
          </section>

          <section className="py-20 px-6 bg-card/30">
            <div className="container mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-center mb-16">
                Почему RaizerDLC?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    icon: 'Shield',
                    title: 'Необнаруживаемость',
                    description: 'Продвинутая система защиты от античитов, регулярные обновления безопасности'
                  },
                  {
                    icon: 'Headphones',
                    title: 'Поддержка 24/7',
                    description: 'Круглосуточная техническая поддержка, быстрые ответы на любые вопросы'
                  },
                  {
                    icon: 'DollarSign',
                    title: 'Выгодная цена',
                    description: 'Лучшее соотношение цены и качества на рынке, гибкая система скидок'
                  },
                  {
                    icon: 'Zap',
                    title: 'Мгновенная активация',
                    description: 'Получите доступ к читу сразу после оплаты, без ожидания'
                  },
                  {
                    icon: 'Settings',
                    title: 'Продвинутый функционал',
                    description: 'AimBot, ESP, NoRecoil, Radar и многое другое с гибкими настройками'
                  },
                  {
                    icon: 'Users',
                    title: 'Активное сообщество',
                    description: 'Присоединяйтесь к тысячам довольных пользователей RaizerDLC'
                  }
                ].map((feature, index) => (
                  <Card key={index} className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon name={feature.icon} className="text-primary" size={28} />
                      </div>
                      <h4 className="text-xl font-semibold font-heading mb-3">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                  Поддерживаемые игры
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'ReallyWorld',
                    status: 'Активно',
                    features: ['AimBot', 'ESP', 'NoRecoil', 'Radar', 'Speedhack']
                  },
                  {
                    name: 'BravoHVH',
                    status: 'Активно',
                    features: ['Rage Mode', 'Anti-Aim', 'Fake Lag', 'Triggerbot', 'Backtrack']
                  }
                ].map((game, index) => (
                  <Card key={index} className="border-primary/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-heading">{game.name}</CardTitle>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500">
                          {game.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {game.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-sm">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'register' && (
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-md">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-heading text-center">
                  Регистрация в RaizerDLC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Никнейм</label>
                    <Input
                      placeholder="Ваш никнейм"
                      value={registerData.nickname}
                      onChange={(e) => setRegisterData({ ...registerData, nickname: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Пароль</label>
                    <Input
                      type="password"
                      placeholder="Придумайте пароль"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Зарегистрироваться
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'buy' && (
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Выберите подписку RaizerDLC
              </h2>
              <p className="text-muted-foreground text-lg">
                Получите полный доступ ко всем функциям чита
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {subscriptions.map((sub) => (
                <Card 
                  key={sub.id} 
                  className={`relative ${sub.popular ? 'border-primary shadow-lg shadow-primary/20 scale-105' : ''} transition-all hover:scale-105`}
                >
                  {sub.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground text-sm px-4 py-1">
                        ПОПУЛЯРНОЕ
                      </Badge>
                    </div>
                  )}
                  {sub.discount && (
                    <div className="absolute -top-4 -right-4">
                      <Badge className="bg-accent text-accent-foreground text-lg px-3 py-1">
                        {sub.discount}
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon name={sub.icon} className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-2xl font-heading mb-2">RaizerDLC</CardTitle>
                      <p className="text-muted-foreground">{sub.name}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <p className="text-4xl font-bold text-primary mb-2">{sub.price}</p>
                      <p className="text-muted-foreground">{sub.duration}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Полный доступ ко всем функциям',
                        'ReallyWorld & BravoHVH',
                        'Поддержка 24/7',
                        'Регулярные обновления',
                        'Приоритет в очереди'
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" className="text-primary" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => handleBuy(sub)} 
                      className="w-full"
                      size="lg"
                      variant={sub.popular ? 'default' : 'outline'}
                    >
                      Купить сейчас
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h3 className="text-4xl font-bold font-heading mb-6">
              Контакты и поддержка
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <Icon name="MessageCircle" className="text-primary mb-4" size={40} />
                    <h4 className="font-semibold mb-2">Telegram</h4>
                    <p className="text-muted-foreground text-sm">@RaizerDLC_Support</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <Icon name="Mail" className="text-primary mb-4" size={40} />
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-muted-foreground text-sm">support@raizerdlc.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground mt-8">
              Техническая поддержка работает круглосуточно. Среднее время ответа: 5-10 минут
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <h4 className="font-bold font-heading text-xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RaizerDLC
          </h4>
          <p className="text-muted-foreground text-sm mb-4">
            Лучший чит для ReallyWorld и BravoHVH
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; 2024 RaizerDLC. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;