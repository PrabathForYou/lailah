# Use the official PHP 8.4 image with Apache
FROM php:8.4-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions: pdo_pgsql for Postgres
RUN docker-php-ext-install pdo_pgsql

# Install and enable Redis extension via PECL
RUN pecl install redis && docker-php-ext-enable redis

# Enable Apache mod_rewrite for Laravel routing
RUN a2enmod rewrite

# Change Apache document root to Laravel's /public folder
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Set working directory
WORKDIR /var/www/html

# Copy your application code
COPY . .

# Set permissions for Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port 80 internally (we will map this to 8082 in docker-compose)
EXPOSE 80
