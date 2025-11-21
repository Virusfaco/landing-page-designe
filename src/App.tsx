import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Toaster } from '@/components/ui/sonner'
import {
  CheckCircle,
  Sparkle,
  MapPin,
  Users,
  ArrowRight,
  Star,
  Camera,
  FilmStrip,
  Wine,
  Gift,
} from '@phosphor-icons/react'
import { toast } from 'sonner'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      toast.success('Success! Check your email for your free Rome Cinema Guide and 10% discount code.')
      setFormData({ name: '', email: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const scrollToForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-primary/5 via-background to-muted/30 pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground tracking-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                MOVIEMILES
              </h1>
              <div className="h-1 w-32 bg-accent mx-auto rounded-full" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <Badge className="bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 px-4 py-2 text-base">
                  <Sparkle weight="fill" className="mr-2" size={18} />
                  Experience Cinematic Rome
                </Badge>
                <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
                  Walk Inside Your Favorite Movies in Rome
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic" style={{ lineHeight: '1.65' }}>
                  Join our exclusive cinema tours and discover the eternal city through the lens of <span className="text-foreground font-semibold">La Dolce Vita</span> and <span className="text-foreground font-semibold">Roman Holiday</span>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-5"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 rounded-full p-2 mt-1">
                    <MapPin className="text-accent" size={22} weight="fill" />
                  </div>
                  <div>
                    <p className="text-lg text-foreground font-medium">Visit iconic film locations with expert guides</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 rounded-full p-2 mt-1">
                    <Wine className="text-accent" size={22} weight="fill" />
                  </div>
                  <div>
                    <p className="text-lg text-foreground font-medium">Authentic Italian food & wine tastings included</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 rounded-full p-2 mt-1">
                    <Camera className="text-accent" size={22} weight="fill" />
                  </div>
                  <div>
                    <p className="text-lg text-foreground font-medium">Perfect photo opportunities for your social media</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg h-16 px-10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 tracking-wide"
                >
                  Get Free Cinema Guide
                  <ArrowRight weight="bold" className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToForm}
                  className="h-16 px-10 font-heading font-semibold text-lg border-2 border-primary text-primary hover:bg-primary/5"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-6 pt-2"
              >
                <div className="flex -space-x-4">
                  <Avatar className="border-4 border-background w-14 h-14 shadow-md">
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-4 border-background w-14 h-14 shadow-md">
                    <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" />
                    <AvatarFallback>J</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-4 border-background w-14 h-14 shadow-md">
                    <AvatarImage src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-4 border-background w-14 h-14 shadow-md">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" />
                    <AvatarFallback>D</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="text-yellow-500 w-5 h-5" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">Rated 4.9/5 by 1,200+ cinema lovers</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative order-1 md:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&h=1100&fit=crop"
                  alt="View of Rome from St. Peter's Basilica"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl shadow-2xl p-6 border-2 border-accent/20 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 rounded-xl p-3">
                    <FilmStrip className="text-accent" size={32} weight="fill" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-3xl text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground font-medium">Film Locations Discovered</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base">
              Why MovieMiles
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Cinematic Adventure Awaits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ lineHeight: '1.65' }}>
              Experience Rome like never before—through the magic of classic cinema with authentic cultural immersion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: MapPin,
                title: 'Iconic Locations',
                description: 'Walk the exact steps of Audrey Hepburn at the Spanish Steps and Trevi Fountain, recreate scenes from La Dolce Vita',
                color: 'text-primary',
                bgColor: 'bg-primary/10',
              },
              {
                icon: Users,
                title: 'Expert Film Guides',
                description: 'Our passionate cinema historians share behind-the-scenes stories and fascinating details about each filming location',
                color: 'text-accent',
                bgColor: 'bg-accent/10',
              },
              {
                icon: Wine,
                title: 'Authentic Experiences',
                description: 'Enjoy gelato at the same cafés featured in the films, taste wine in historic Roman trattorias',
                color: 'text-primary',
                bgColor: 'bg-primary/10',
              },
              {
                icon: Camera,
                title: 'Instagram-Ready Moments',
                description: 'Professional tips for capturing stunning photos at every location—your feed will thank you',
                color: 'text-accent',
                bgColor: 'bg-accent/10',
              },
              {
                icon: FilmStrip,
                title: 'Small Group Tours',
                description: 'Maximum 12 people per tour for an intimate, personalized experience with plenty of attention',
                color: 'text-primary',
                bgColor: 'bg-primary/10',
              },
              {
                icon: Gift,
                title: 'Exclusive Perks',
                description: 'Free cinema guide, skip-the-line access to key sites, and special discounts at partner locations',
                color: 'text-accent',
                bgColor: 'bg-accent/10',
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-border/50 bg-card">
                  <CardContent className="p-8 space-y-4">
                    <div className={`${benefit.bgColor} rounded-2xl w-16 h-16 flex items-center justify-center`}>
                      <benefit.icon className={benefit.color} size={32} weight="bold" />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg" style={{ lineHeight: '1.65' }}>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg h-16 px-10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 tracking-wide"
            >
              Claim Your Free Guide + 10% Off
              <ArrowRight weight="bold" className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-muted/40 to-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 px-4 py-2 text-base">
              <Star weight="fill" className="mr-2" />
              Testimonials
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Stories from Cinema Lovers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ lineHeight: '1.65' }}>
              Hear from travelers who discovered the magic of Rome through our film tours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: 'Emma Thompson',
                role: 'Film Enthusiast, London',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
                quote: 'I felt like I was Audrey Hepburn for a day! Our guide knew every detail about Roman Holiday filming. The gelato stop at the exact café from the movie was magical. Worth every penny!',
                rating: 5,
              },
              {
                name: 'Marco Rossi',
                role: 'Photographer, Milan',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                quote: 'As a photographer, the composition tips at each location were invaluable. I captured stunning shots and learned so much about Italian cinema history. An unforgettable experience!',
                rating: 5,
              },
              {
                name: 'Sarah Williams',
                role: 'Travel Blogger, New York',
                image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop',
                quote: 'Best tour in Rome, hands down. The small group made it feel personal, the wine tasting was authentic, and I got content for weeks! My followers are already booking their trips.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Card className="h-full border-2 bg-background/80 backdrop-blur hover:shadow-xl transition-all">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} weight="fill" className="text-yellow-500 w-6 h-6" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed italic text-lg" style={{ lineHeight: '1.65' }}>
                      "{testimonial.quote}"
                    </p>
                    <Separator />
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-accent/20">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-heading font-semibold text-lg text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background" id="signup-form">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 px-4 py-2 text-base">
              <Gift weight="fill" className="mr-2" />
              Special Offer
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get Your Free Rome Cinema Guide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ lineHeight: '1.65' }}>
              Sign up to receive our exclusive guide to Rome's film locations and get a <span className="text-accent font-bold">10% discount</span> on your first tour
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-accent/20 shadow-2xl bg-gradient-to-br from-card to-background">
              <CardContent className="p-10 md:p-14">
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-base font-semibold text-foreground">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Maria Romano"
                      className="h-14 text-lg border-2 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-base font-semibold text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="maria@email.com"
                      className="h-14 text-lg border-2 focus:border-accent"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-xl h-16 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 tracking-wide"
                    >
                      {isSubmitting ? 'Sending Your Guide...' : 'Get Free Guide + 10% Discount'}
                      {!isSubmitting && <Gift weight="bold" className="ml-3" size={24} />}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <CheckCircle className="text-accent" size={20} weight="fill" />
                    <p className="text-sm text-center text-muted-foreground">
                      100% free. No spam. Unsubscribe anytime.
                    </p>
                  </div>
                </form>

                <Separator className="my-10" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <CheckCircle className="text-primary" size={24} weight="fill" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg mb-1">Instant Access</div>
                      <div className="text-muted-foreground">Your guide arrives in your inbox within minutes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-xl p-3">
                      <Sparkle className="text-accent" size={24} weight="fill" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg mb-1">Limited Time Offer</div>
                      <div className="text-muted-foreground">10% discount valid for bookings made this month</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-3">100% Satisfaction Guaranteed • Small Groups • Expert Guides</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/5 border-t-2 border-accent/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8 flex-wrap justify-center">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary" size={28} weight="fill" />
                <span className="text-base font-semibold text-foreground">Small Groups</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" size={28} weight="fill" />
                <span className="text-base font-semibold text-foreground">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-accent" size={28} weight="bold" />
                <span className="text-base font-semibold text-foreground">1,200+ Happy Guests</span>
              </div>
            </div>
            <div className="text-base text-muted-foreground">
              © 2024 MovieMiles Rome. All rights reserved.
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t-2 border-accent/20 shadow-2xl z-50">
        <Button
          size="lg"
          onClick={scrollToForm}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg h-14 shadow-xl tracking-wide"
        >
          Get Free Guide + 10% Off
          <Gift weight="bold" className="ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default App
