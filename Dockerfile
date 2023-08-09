# Use the latest official Ruby image as the base image
FROM ruby:latest

# Set the working directory in the container
WORKDIR /app

# Install Jekyll and Bundler
RUN gem install jekyll bundler

# Copy the contents of your Jekyll site into the container's working directory
COPY . .

# Expose the default Jekyll port (4000)
EXPOSE 4000

# Run Jekyll serve command when the container starts
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
