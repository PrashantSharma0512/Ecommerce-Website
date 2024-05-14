import React from 'react'
import Menu from '../menus/Menu'
import cart from '../assets/cart.svg'
import net from '../assets/netflix.svg'
function ProductPage() {
  return (
    <div className='flex'>
      <div className=' border-r-red-900 w-1/4 bg-blue-300 p-8'>
        <input type="range" name="" className='w-full p' />
      </div>
      <div className='w-3/4 '>
        <div className='overflow-x-scroll w-full mt-16'>
          <div className='w-full text-center mb-10'>
            <h1 className='font-bold text-4xl text-blue-800 underline'>SHOP</h1>
          </div>
          <div className='flex justify-center items-center gap-7 flex-wrap'>
            <Menu name="GEODE11" descp="lorem23 nethvhjknlkvdnklsnd" img={net} />
            <Menu name="GEODE12" descp="lorem23 lorem khbkjbkjbkjbk" img={cart} />
            <Menu name="GEODE13" descp="lorem23 lorem23 nlkvdnklsnd" img={net} />
            <Menu name="GEODE14" descp="lorem23 lorem23 nlkvdnklsnd" img={cart} />
            <Menu name="GEODE11" descp="lorem23 nethvhjknlkvdnklsnd" img={net} />
            <Menu name="GEODE12" descp="lorem23 lorem khbkjbkjbkjbk" img={cart} />
            <Menu name="GEODE13" descp="lorem23 lorem23 nlkvdnklsnd" img={net} />
            <Menu name="GEODE14" descp="lorem23 lorem23 nlkvdnklsnd" img={cart} />
            <Menu name="GEODE11" descp="lorem23 nethvhjknlkvdnklsnd" img={net} />
            <Menu name="GEODE12" descp="lorem23 lorem khbkjbkjbkjbk" img={cart} />
            <Menu name="GEODE13" descp="lorem23 lorem23 nlkvdnklsnd" img={net} />
            <Menu name="GEODE14" descp="lorem23 lorem23 nlkvdnklsnd" img={cart} />
            <Menu name="GEODE15" descp="lorem23 lorem23 nlkvdnklsnd" img={net} />
            <Menu name="GEODE15" descp="lorem23 lorem23 nlkvdnklsnd" img={cart} />
            <Menu name="GEODE13" descp="lorem23 lorem23 nlkvdnklsnd" img={cart} />
            <Menu name="GEODE14" descp="lorem23 lorem23 nlkvdnklsnd" img={net} />
            <Menu name="GEODE15" descp="lorem23 lorem23 nlkvdnklsnd" img={cart} />
            <Menu name="GEODE15" descp="lorem23 lorem23 nlkvdnklsnd" img={net} />
          </div >

        </div>
      </div>
    </div>
  )
}

export default ProductPage
