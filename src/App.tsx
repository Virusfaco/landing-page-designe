import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Toaster } from '@/components/ui/sonner'
import {
  CheckCircle,
  ShieldCheck,
  Lightning,
  TrendUp,
  Users,
  ArrowRight,
  Star,
  Clock,
  Trophy,
  Phone,
  EnvelopeSimple,
} from '@phosphor-icons/react'
import { toast } from 'sonner'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      toast.success('Thank you! We\'ll contact you within 24 hours.')
      setFormData({ name: '', email: '', phone: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-primary/5 via-background to-muted/30 pt-16 pb-20 md:pt-24 md:pb-32"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                  <Lightning weight="fill" className="mr-1" />
                  Trusted by 10,000+ Businesses
                </Badge>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground tracking-tight">
                  Transform Your Business Growth in 90 Days
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Join thousands of successful companies who increased their revenue by 20%+ using our proven strategies and premium solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Get Started Free
                  <ArrowRight weight="bold" className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToForm}
                  className="h-14 px-8 font-heading font-semibold text-lg border-2"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex -space-x-3">
                  <Avatar className="border-2 border-background w-10 h-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background w-10 h-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background w-10 h-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" />
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background w-10 h-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                    <AvatarFallback>D</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="text-yellow-500 w-4 h-4" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">4.9/5 from 2,847 reviews</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Business dashboard showing growth metrics"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-xl p-4 border">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/10 rounded-full p-2">
                    <TrendUp className="text-green-600" size={24} weight="bold" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-foreground">+127%</div>
                    <div className="text-sm text-muted-foreground">Revenue Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Why Choose Us
            </Badge>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive solution provides all the tools and support you need to achieve your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightning,
                title: 'Lightning Fast Results',
                description: 'See measurable improvements in your business metrics within the first 30 days of implementation',
                color: 'text-yellow-600',
                bgColor: 'bg-yellow-500/10',
              },
              {
                icon: ShieldCheck,
                title: 'Guaranteed Success',
                description: 'Our proven methodology has helped over 10,000 businesses achieve their growth targets',
                color: 'text-green-600',
                bgColor: 'bg-green-500/10',
              },
              {
                icon: Users,
                title: 'Expert Support 24/7',
                description: 'Access our team of specialists whenever you need guidance or assistance',
                color: 'text-blue-600',
                bgColor: 'bg-blue-500/10',
              },
              {
                icon: TrendUp,
                title: 'Proven Growth Strategy',
                description: 'Data-driven approach that has consistently delivered 20%+ revenue increases',
                color: 'text-purple-600',
                bgColor: 'bg-purple-500/10',
              },
              {
                icon: Clock,
                title: 'Save Time & Resources',
                description: 'Automate repetitive tasks and focus on what matters most for your business',
                color: 'text-orange-600',
                bgColor: 'bg-orange-500/10',
              },
              {
                icon: Trophy,
                title: 'Industry Recognition',
                description: 'Award-winning platform trusted by Fortune 500 companies and startups alike',
                color: 'text-pink-600',
                bgColor: 'bg-pink-500/10',
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className={`${benefit.bgColor} rounded-xl w-14 h-14 flex items-center justify-center`}>
                      <benefit.icon className={benefit.color} size={28} weight="bold" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="pt-2">
                      <CheckCircle className="text-accent" size={20} weight="fill" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Start Your Free Trial
              <ArrowRight weight="bold" className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Success Stories
            </Badge>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses who transformed their growth with our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Inc',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                quote: 'We saw a 35% increase in revenue within just 3 months. The results exceeded all our expectations and the support team was incredible.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Founder, GrowthLabs',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                quote: 'This is exactly what we needed. The implementation was smooth and we started seeing results immediately. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Marketing Director, Innovate Co',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                quote: 'The ROI has been phenomenal. Our team productivity increased by 40% and our customer satisfaction scores are at an all-time high.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Card className="h-full border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} weight="fill" className="text-yellow-500 w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <Separator />
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-heading font-semibold text-foreground">
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

      <section className="py-16 md:py-24 bg-background" id="contact-form">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">
              Ready to Grow?
            </Badge>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
              Start Your Success Story Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team and discover how we can help you achieve your 20% growth goal
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold text-lg h-14 shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Started Free'}
                      {!isSubmitting && <ArrowRight weight="bold" className="ml-2" />}
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    <ShieldCheck className="inline mr-1" size={14} />
                    We respect your privacy. Your information is secure and will never be shared.
                  </p>
                </form>

                <Separator className="my-8" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Phone className="text-primary" size={20} weight="bold" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Call us</div>
                      <div className="font-semibold text-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-3">
                      <EnvelopeSimple className="text-primary" size={20} weight="bold" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email us</div>
                      <div className="font-semibold text-foreground">hello@company.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary" size={24} weight="bold" />
                <span className="text-sm font-semibold text-foreground">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="text-primary" size={24} weight="bold" />
                <span className="text-sm font-semibold text-foreground">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={24} weight="fill" />
                <span className="text-sm font-semibold text-foreground">Trusted by 10K+</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Your Company. All rights reserved.
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-lg z-50">
        <Button
          size="lg"
          onClick={scrollToForm}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold shadow-lg"
        >
          Get Started Free
          <ArrowRight weight="bold" className="ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default App