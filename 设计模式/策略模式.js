const getCouponText = (type) => {
    if (type === 1) {
        return '免费券'
    } else if (type === 2) {
        return '立减券'
    } else if (type === 3) {
        return '折扣券'
    }
};

const COUPON_TYPE = {
    FREE: 1, // 免费
    DISCOUNT: 2, // 折扣
    REDUCE: 3, // 立减
};

const COUPON_TYPES = {
    [COUPON_TYPE.FREE]: '免费券',
    [COUPON_TYPE.DISCOUNT]: '折扣券',
    [COUPON_TYPE.REDUCE]: '立减券'
}
const getCouponText = (type) => {
    return COUPON_TYPES[type] || ''
}

const couponFunctions = {
    [COUPON_TYPE.FREE]: () => {
        //do sth
    },
    [COUPON_TYPE.DISCOUNT]: () => {
        //do sth
    },
    [COUPON_TYPE.REDUCE]: () => {
        //do sth
    }
}
const handleType = (type) => {
    couponFunctions[type] && couponFunctions[type]()
}
