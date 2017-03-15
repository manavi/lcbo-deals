export interface Product {

  name: string;
  product_no: number;
  image_url: string;
  image_thumb_url: string;
  total_package_units: number;
  primary_category: string;
  secondary_category: string;
  regular_price_in_cents: number;
  price_in_cents: number;
  limited_time_offer_savings_in_cents: number;
  limited_time_offer_ends_on: string;
  package: string;
  origin: string;
  inventory_count: number;
  alcohol_content;
  volume_in_milliliters;
}

export interface Paging {

  records_per_page: number;
  total_record_count: number;
  is_first_page: boolean;
  is_final_page: boolean;
  current_page: number;
  total_pages: number;
}
