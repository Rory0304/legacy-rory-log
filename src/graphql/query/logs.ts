import { gql } from "@apollo/client";
import { FRAGMENT_LOGS } from "../fragment";


export const GET_LOGS = gql`
    query GetLogs {
        logCollection {
            items {
                ...LogsFields
            }
        }
    }

    ${FRAGMENT_LOGS}
`;
