export interface Product {

  name: string;
  image_thumb_url: string;
  total_package_units: number;
  primary_category: string;
  price_in_cents: number;
  regular_price_in_cents: number;
  limited_time_offer_ends_on: string;
}

export interface Paging {

  records_per_page: number;
  total_record_count: number;
  is_first_page: boolean;
  is_final_page: boolean;
  current_page: number;
  total_pages: number;
}
