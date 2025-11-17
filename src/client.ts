import {
  AppsV1Api,
  CoreV1Api,
  CustomObjectsApi,
  KubeConfig
} from '@kubernetes/client-node'

export function createK8sClient() {
  const kc = new KubeConfig()

  if (process.env.KUBERNETES_SERVICE_HOST) {
    // In-cluster config
    kc.loadFromCluster()
    console.log("Connected via in-cluster")
  } else {
    // Local config (~/.kube/config)
    kc.loadFromDefault()
    console.log("Connected via local config")
  }

  return {
    kc,
    core: kc.makeApiClient(CoreV1Api),
    apps: kc.makeApiClient(AppsV1Api),
    customObjects: kc.makeApiClient(CustomObjectsApi)
  }
}
