import React from 'react'

function Hero () {
  return (
    <div className='container border-bottom'>
      <div className='row p-5 mt-5 border-bottom '>
        <h1 className='text-center'><b>Charges</b></h1>
        <h3 className='text-muted text-center mt-3 fs-5'>List of all charges and taxes</h3>
        <div className='col-4 p-4 text-center'>
          <img src='media/images/pricing0.svg'/>
          <h1 className='fs-3'>Free equity delivery</h1>
          <p className='text-muted text-center fs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 p-4 text-center'>
        <img src='media/images/intradayTrades.svg'/>
          <h1 className='fs-3'>Intraday and F&O trades</h1>
          <p className='text-muted text-center fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 p-4 text-center'>
        <img src='media/images/pricing0.svg'/>
          <h1 className='fs-3'>Free direct MF</h1>
          <p className='text-muted text-center fs-6'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Hero;
