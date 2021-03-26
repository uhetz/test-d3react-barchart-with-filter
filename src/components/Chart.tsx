import {
    FC, 
    useRef
} from 'react';

const Chart: FC<any> = () => {
    const ref = useRef(null);
    return (
        <svg ref={ref}>

        </svg>
    )
}

//https://query1.finance.yahoo.com/v7/finance/download/TSLA?period1=1277769600&period2=1616716800&interval=1mo&events=history&includeAdjustedClose=true