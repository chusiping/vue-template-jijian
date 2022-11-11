import request from '@/utils/request'
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from 'qs'

export function get_bk2() {
    return request.get('/api/vhost/custom/api_stock.php?fcname=get_bk2')
}
export function fet() {
    const dd = { P_code: 'cn_515030-ETF-,cn_512760-ETF-,cn_512880-ETF-,cn_512800-ETF-,cn_512400-ETF-,cn_512660-ETF-,cn_512720-ETF-,cn_512690-ETF-,cn_515000-ETF-,cn_515210-ETF-,cn_510800-ETF-,cn_515710-ETF-,cn_515650-ETF-,cn_510150-ETF-,cn_516550-ETF-,cn_516760-ETF-' }
    const para = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(dd),
        url: 'http://win7.qy/vhost/custom/api_stock.php?fcname=exec_getSinaPrice',
    }
    return para
}
