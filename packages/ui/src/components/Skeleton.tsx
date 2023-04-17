import * as $Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function Skeleton(props: $Skeleton.SkeletonProps) {
    return <$Skeleton.default {...props} />
}

const SkeletonTheme = $Skeleton.SkeletonTheme

export { SkeletonTheme }
