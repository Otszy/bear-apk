# Overview

Bear_Apk is a Telegram Mini App built for cryptocurrency earning through advertisements, subscriptions, and referrals. The application provides users with a gamified experience where they can earn crypto by watching ads, subscribing to channels, and referring friends. It features a React-based frontend with a Vite build system and integrates with Supabase for data storage and Telegram's WebApp API for user authentication.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with Vite as the build tool
- **Styling**: Minimal CSS with inline styles, dark theme (#0F1115 background)
- **State Management**: Built-in React hooks (no external state management library)
- **Telegram Integration**: Direct integration with Telegram WebApp API for user authentication and initialization data

## Backend Architecture
- **API Structure**: Serverless functions using Vercel's API routes pattern
- **Authentication**: Telegram WebApp initData validation with HMAC-SHA256 signature verification
- **CORS Handling**: Centralized CORS utility allowing all origins with specific headers
- **Error Handling**: Consistent error response format across all endpoints

## Core API Endpoints
- `/api/health` - Health check endpoint
- `/api/ads/start` - Initialize ad watching session
- `/api/ads/verify` - Verify ad completion and reward user
- `/api/subscribe/start` - Get subscription links for social platforms
- `/api/subscribe/verify` - Verify subscription completion
- `/api/withdraw/create` - Handle cryptocurrency withdrawal requests
- `/api/_debug/tg-*` - Debug utilities for Telegram integration testing

## Data Storage
- **Primary Database**: Supabase (PostgreSQL) for user data, balances, and transaction history
- **Session Storage**: Browser sessionStorage for caching Telegram initData
- **User Schema**: Users table with fields for balance, total_earned, referral_code, and Telegram user info

## Authentication & Authorization
- **Method**: Telegram WebApp initData validation
- **Token Sources**: Multiple fallback sources (WebApp API, URL hash, query params, sessionStorage)
- **Validation**: HMAC-SHA256 signature verification against bot token
- **Session Management**: Stateless authentication using Telegram-provided data

## Integration Points
- **Telegram Bot API**: For membership verification in channels
- **Social Platforms**: Twitter/X profile following verification
- **Ad Networks**: External ad providers (configurable via environment variables)
- **Cryptocurrency**: Withdrawal system supporting multiple networks

# External Dependencies

## Core Technologies
- **React 18.2.0**: Frontend framework for UI components and state management
- **Vite 5.0.0**: Build tool and development server with HMR support
- **@supabase/supabase-js 2.57.4**: Database client for PostgreSQL operations

## Telegram Integration
- **Telegram WebApp API**: Browser-based API for Mini Apps
- **Telegram Bot API**: Server-side API for bot operations and membership checks
- **Environment Variables**: TG_BOT_TOKEN, TG_CHANNEL_ID, TG_CHANNEL_USERNAME for configuration

## Database & Storage
- **Supabase**: Backend-as-a-Service providing PostgreSQL database, authentication, and real-time features
- **Environment Variables**: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY for client configuration

## External Services
- **Ad Networks**: Configurable ad providers via AD_URL environment variable
- **Social Media Platforms**: Twitter/X integration for follow verification (X_PROFILE_URL)
- **Telegram Channels**: Private channel access via invite links (TG_CHANNEL_INVITE)

## Development Tools
- **@vitejs/plugin-react 4.0.0**: Vite plugin for React support with Fast Refresh
- **Node.js 18+**: Runtime requirement for serverless functions
- **Crypto Module**: Built-in Node.js module for HMAC signature validation