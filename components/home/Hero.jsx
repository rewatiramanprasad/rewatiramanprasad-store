import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import  HeroCarousel  from '@/components/home/HeroCarousel'
function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          we are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, at.
          Excepturi ad perferendis, accusamus illum debitis rem ratione quod
          quis.
        </p>
        <Button className="mt-10" asChild size="lg">
          <Link href={'/products'}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero
