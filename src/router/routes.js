import { routes as pages} from '../views'
import { routes as product } from '../modules/product'
import { routes as user } from '../modules/user'

export default [
    ...pages,
    ...product,
    ...user
];