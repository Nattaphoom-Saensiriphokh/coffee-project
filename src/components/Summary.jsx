import { useMemo } from "react";

import useCart from "../hooks/useCart";

function Summary() {

    const {

        cart

    } = useCart();

    const total = useMemo(() => {

        return cart.reduce(

            (sum, item) =>

                sum +

                item.price *

                item.quantity,

            0

        );

    }, [cart]);

    const totalItem = useMemo(() => {

        return cart.reduce(

            (sum, item) =>

                sum +

                item.quantity,

            0

        );

    }, [cart]);

    return (

        <div className="summary">

            <h2>

                Order Summary

            </h2>

            <p>

                จำนวนสินค้า : {totalItem}

            </p>

            <p>

                ราคารวม : {total} บาท

            </p>

        </div>

    );

}

export default Summary;