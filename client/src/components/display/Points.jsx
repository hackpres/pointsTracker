import React from 'react';
import { getPoints } from '../../utils/usersFunctions';

function Points(props) {
    const points = [];
    const getPointData = (arr) => {
        points.push(getPoints(arr))
        return getPoints(arr)
    }
    const getPointTotal = (arr) => {
        if(arr[0] || arr[0] === 0) {
            return <p>Total points earned = {arr.reduce((accum, curr) => accum + curr)}</p>
        }
    }
    const getPurchases = (data) => {
        console.log(data)
        if (data.length > 0) {
            let purchases = [];
            data.forEach(num => purchases.push(parseInt(num)))
            return data.join(', ')
        } else return 'No purchases made this month'
    }
  return (
    <>
        <div>
            {props.quarter.map((month, i) => {
                let data = Object.entries(month)
                return (
                    <div key={i}>
                        <p>
                            {data[0][0]}: {getPointData(data[0][1])}
                        </p>
                        <p>Purchases:</p>
                        <p>
                            {getPurchases(data[0][1])}
                        </p>
                    </div>

                )
            })}
        </div>
        {getPointTotal(points)}
    </>
  )
}

export default Points