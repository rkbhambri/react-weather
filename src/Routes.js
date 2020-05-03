import React from 'react';
const Login = React.lazy(() => import('./components/Login/Login'));
const Home = React.lazy(() => import('./components/Content/Content'));
const Watchlist = React.lazy(() => import('./components/Watchlist/Watchlist'));
const MovieDetails = React.lazy(() => import('./components/Content/MovieDetails/MovieDetails'));
const TrendingDetails = React.lazy(() => import('./components/Content/TrendingDetails/TrendingDetails'));

export const unauthenticated_routes = [
    {
        path: '/login',
        component: Login
    },
];

export const authenticated_routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/watchlist',
        component: Watchlist
    },
    {
        path: '/movie/:movieId',
        component: MovieDetails
    },
    {
        path: '/tv/:tvId',
        component: TrendingDetails
    },
    // {
    //     path: '/events/:id/leaderboard',
    //     component: Leaderboard
    // }
];
