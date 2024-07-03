import React from "react";
import Slider from "./Slider";
import { Check, Star } from "lucide-react";
import { Link } from "@inertiajs/react";

const Landing = () => {
  const slides = [
    {
      img: "images/1.jpg",
      title: "Slide 1",
      content: "Slide 1 content",
    },
    {
      img: "images/2.jpg",
      title: "Slide 2",
      content: "Slide 2 content",
    },
    {
      img: "images/3.jpg",
      title: "Slide 3",
      content: "Slide 3 content",
    },
  ];

  const categories = [
    {
      title: "Freelancers",
      description: "Simplified financial tracking",
      icon: <span>&#128188;</span>,
    },
    {
      title: "Self-Employed",
      description: "Flexible invoicing and expensing",
      icon: <span>&#128176;</span>,
    },
    {
      title: "Businesses with contractors",
      description: " Efficient project management",
      icon: <span>&#128188;</span>,
    },
    {
      title: "Businesses with employees",
      description: "Comprehensive payroll solutions",
      icon: <span>&#128176;</span>,
    },
  ];

  const advantages = [
    {
      title: 'Simplified Invoicing',
      description: 'Create professional invoices in minutes',
      icon: '📄',
    },
    {
      title: 'Expense Tracking',
      description: 'Effortlessly manage your business expenses',
      icon: '💰',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h1 className="text-xl font-bold">
              Welcome to Billing Website
            </h1>
            <p className="text-sm text-gray-600">
              Accounting Software Made Easy
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold">Billing Website</h2>
        </div>
      </header>

      <main className="flex flex-col items-center">
          <div className="w-full max-w-md space-y-4 mb-8">
            <div className="w-full py-2 px-4 border border-gray-300 rounded-md text-center">
              <Link href={route('login')} >
                Login
              </Link>
            </div>
            <div className="w-full py-2 px-4 bg-gray-400 text-white rounded-md text-center">
              <Link href={route('register')} className="">
                Try It
              </Link>
            </div>
          </div>

        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-center">
            For Small Businesses
          </button>
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-center">
            For Accountants
          </button>
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-center">
            Resources
          </button>
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-center">
            Pricing
          </button>
        </div>
      </main>
      <section className="mt-12">
        <Slider slides={slides} />
      </section>

      {/* Client Category Section */}

      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Client Categories</h2>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-1/4 bg-gray-200 h-24 flex items-center justify-center text-4xl">
                  {category.icon}
                </div>
                <div className="w-3/4 p-4">
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              {index < categories.length - 1 && (
                <hr className="border-t border-gray-500 my-5" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Review Section */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Client Categories</h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-4 mt-2">
              <img src="images/1.jpg" alt="user" className="rounded-full h-12 w-12 object-cover" />
              <div className="flex flex-col">
                <p className="font-semibold">
                  Jonathan
                </p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchange</p>
                </div>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
            </div>
            <div>
              <p>
                The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months now and{' '}
                <span className='p-0.5 bg-slate-800 text-white'>
                  the image is super clear
                </span>
                , on the case I had before, the image started fading into
                yellow-ish color after a couple weeks. Love it.
              </p>
            </div>
          </div>
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-4 mt-2">
              <img src="images/2.jpg" alt="user" className="rounded-full h-12 w-12 object-cover" />
              <div className="flex flex-col">
                <p className="font-semibold">
                  Jesica
                </p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchange</p>
                </div>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
            </div>
            <div>
              <p>
                I usually keep my phone together with my keys in my pocket
                and that led to some pretty heavy scratchmarks on all of my
                last phone cases. This one, besides a barely noticeable
                scratch on the corner,{' '}
                <span className='p-0.5 bg-slate-800 text-white'>
                  looks brand new after about half a year
                </span>
                . I dig it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Advantages */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Product Advantages</h2>
        <div className="space-y-4">
          {advantages.map((advantage, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-1/4 bg-gray-200 h-24 flex items-center justify-center text-4xl">
                  {advantage.icon}
                </div>
                <div className="w-3/4 p-4">
                  <h3 className="text-xl font-semibold">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
              {index < categories.length - 1 && (
                <hr className="border-t border-gray-500 my-5" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
