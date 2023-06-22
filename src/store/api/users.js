import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_DATA_PATH } from 'configs/AppConfig';

export const usersApi = createApi({
    reducerPath: 'users-db',
    baseQuery: fetchBaseQuery({
        baseUrl: USERS_DATA_PATH,

    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: `posts`,
                method: 'GET'
            })
        }),
    }),
});

export const {
    useGetUsersQuery,
    util: { getRunningQueriesThunk },
} = usersApi;


export const { getUsers } = usersApi.endpoints;