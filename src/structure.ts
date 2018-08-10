/*
 * Copyright (c) 2018-2018 dokmic, Snowplow Analytics Ltd. All rights reserved.
 *
 * This program is licensed to you under the Apache License Version 2.0,
 * and you may not use this file except in compliance with the Apache License Version 2.0.
 * You may obtain a copy of the Apache License Version 2.0 at http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the Apache License Version 2.0 is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the Apache License Version 2.0 for the specific language governing permissions and limitations there under.
 */
import {
  String,
  Integer,
  Double,
  Boolean,
  Timestamp,
  Contexts,
  Unstruct,
} from './types';

export const LATITUDE_INDEX = 22,
  LONGITUDE_INDEX = 23,
  EVENT_STRUCTURE = {
    app_id: String,
    platform: String,
    etl_tstamp: Timestamp,
    collector_tstamp: Timestamp,
    dvce_created_tstamp: Timestamp,
    event: String,
    event_id: String,
    txn_id: Integer,
    name_tracker: String,
    v_tracker: String,
    v_collector: String,
    v_etl: String,
    user_id: String,
    user_ipaddress: String,
    user_fingerprint: String,
    domain_userid: String,
    domain_sessionidx: Integer,
    network_userid: String,
    geo_country: String,
    geo_region: String,
    geo_city: String,
    geo_zipcode: String,
    geo_latitude: Double,
    geo_longitude: Double,
    geo_region_name: String,
    ip_isp: String,
    ip_organization: String,
    ip_domain: String,
    ip_netspeed: String,
    page_url: String,
    page_title: String,
    page_referrer: String,
    page_urlscheme: String,
    page_urlhost: String,
    page_urlport: Integer,
    page_urlpath: String,
    page_urlquery: String,
    page_urlfragment: String,
    refr_urlscheme: String,
    refr_urlhost: String,
    refr_urlport: Integer,
    refr_urlpath: String,
    refr_urlquery: String,
    refr_urlfragment: String,
    refr_medium: String,
    refr_source: String,
    refr_term: String,
    mkt_medium: String,
    mkt_source: String,
    mkt_term: String,
    mkt_content: String,
    mkt_campaign: String,
    contexts: Contexts,
    se_category: String,
    se_action: String,
    se_label: String,
    se_property: String,
    se_value: String,
    unstruct_event: Unstruct,
    tr_orderid: String,
    tr_affiliation: String,
    tr_total: Double,
    tr_tax: Double,
    tr_shipping: Double,
    tr_city: String,
    tr_state: String,
    tr_country: String,
    ti_orderid: String,
    ti_sku: String,
    ti_name: String,
    ti_category: String,
    ti_price: Double,
    ti_quantity: Integer,
    pp_xoffset_min: Integer,
    pp_xoffset_max: Integer,
    pp_yoffset_min: Integer,
    pp_yoffset_max: Integer,
    useragent: String,
    br_name: String,
    br_family: String,
    br_version: String,
    br_type: String,
    br_renderengine: String,
    br_lang: String,
    br_features_pdf: Boolean,
    br_features_flash: Boolean,
    br_features_java: Boolean,
    br_features_director: Boolean,
    br_features_quicktime: Boolean,
    br_features_realplayer: Boolean,
    br_features_windowsmedia: Boolean,
    br_features_gears: Boolean,
    br_features_silverlight: Boolean,
    br_cookies: Boolean,
    br_colordepth: String,
    br_viewwidth: Integer,
    br_viewheight: Integer,
    os_name: String,
    os_family: String,
    os_manufacturer: String,
    os_timezone: String,
    dvce_type: String,
    dvce_ismobile: Boolean,
    dvce_screenwidth: Integer,
    dvce_screenheight: Integer,
    doc_charset: String,
    doc_width: Integer,
    doc_height: Integer,
    tr_currency: String,
    tr_total_base: Double,
    tr_tax_base: Double,
    tr_shipping_base: Double,
    ti_currency: String,
    ti_price_base: Double,
    base_currency: String,
    geo_timezone: String,
    mkt_clickid: String,
    mkt_network: String,
    etl_tags: String,
    dvce_sent_tstamp: Timestamp,
    refr_domain_userid: String,
    refr_device_tstamp: Timestamp,
    derived_contexts: Contexts,
    domain_sessionid: String,
    derived_tstamp: Timestamp,
    event_vendor: String,
    event_name: String,
    event_format: String,
    event_version: String,
    event_fingerprint: String,
    true_tstamp: Timestamp
  };
