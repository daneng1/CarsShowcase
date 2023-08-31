'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CarCardProps } from '@/types'
import { calculateCarRent } from '@/utils'
import { CustomButton, CarDetails } from '.'

const CarCard = ({ car }: CarCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { city_mpg, combination_mpg, cylinders, drive, fuel_type, highway_mpg, make, model, transmission, year} = car

  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 my-3'>
        <Image src='/hero.png' alt='car model' fill priority className='object-contain'/>
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' alt='steering wheel' height={20} width={20}/>
            <p className='text-[14px]'>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' alt='tire' height={20} width={20}/>
            <p className='text-[14px]'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' alt='gas' height={18} width={18}/>
            <p className='text-[14px]'>{city_mpg} MPG</p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton 
            title='View more' 
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsModalOpen(true)}
            />
        </div>
      </div>

      <CarDetails isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} car={car} />
    </div>
  )
}

export default CarCard