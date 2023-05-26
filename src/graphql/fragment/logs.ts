import { gql } from "@apollo/client";

export const FRAGMENT_LOGS = gql`
    fragment LogsFields on Log {
        sys {
            id
        }
        title
        content
        youtubeUrl
        media {
            url
        }
        tag
        date
    }
`
