import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames"


type UsersPropsType = {
    pageSize: number
    totalItemCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalItemCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: props.currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    );
};
