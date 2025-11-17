import { createK8sClient } from './client'

const client = createK8sClient()


const namespaces = client.core.listNamespace


console.log(namespaces.length)