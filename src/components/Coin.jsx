import React from 'react'

const Coin = (props) => {

    const { image, name, symbol, current_price: price, total_volume, price_change_percentage_24h: price_change, market_cap } = props.coin

    console.log(props)

    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt="" />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price.toLocaleString()}</p>
                    <p className='coin-volume'>${total_volume.toLocaleString()}</p>
                    <p>{price_change < 0 ? (<p className='coin-percent red'>{price_change.toFixed(2)}%</p>) :
                        (<p className='coin-percent green'>{price_change.toFixed(2)}%</p>)}
                    </p>
                    <p className='coin-marketcap'>Mkt Cap: ${market_cap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin