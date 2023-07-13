type guild = {
    "id": string,
    "name": string,
    "icon": string,
    "description": string,
    "splash": string | null,
    "discovery_splash": string | null,
    "features": Array,
    "emojis": Array,
    "banner": string,
    "owner_id": string,
    "application_id": string |  null,
    "region": string | null,
    "afk_channel_id": string | null,
    "afk_timeout": number,
    "system_channel_id": string | null,
    "widget_enabled": boolean,
    "widget_channel_id": string | null,
    "verification_level": number,
    "roles": Array,
    "default_message_notifications": number,
    "mfa_level": number,
    "explicit_content_filter": number,
    "max_presences": number,
    "max_members": number,
    "vanity_url_code": string,
    "premium_tier": number,
    "premium_subscription_count": number,
    "system_channel_flags": number,
    "preferred_locale": string,
    "rules_channel_id": string,
    "public_updates_channel_id": string,
    "safety_alerts_channel_id": string
  }

  type unavaliable_guild  = {
    "id": string,
    "unavailable": boolean
  }