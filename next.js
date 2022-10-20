import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('yourcomponent using react apex-charts'),
  { ssr: false }
)
