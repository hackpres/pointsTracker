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
  return (
    <>
        <div>
            {props.quarter.map((month, i) => {
                let data = Object.entries(month)
                return (
                    <p key={i}>
                        {data[0][0]}: {getPointData(data[0][1])}
                    </p>
                )
            })}
        </div>
        {getPointTotal(points)}
    </>
  )
}

export default Points