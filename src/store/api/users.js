import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'constants/ApiConstant';

export const usersApi = createApi({
    reducerPath: 'users-db',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,

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