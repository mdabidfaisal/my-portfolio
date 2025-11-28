FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Expose custom port
EXPOSE 1007

# Run Vite preview on your custom port
CMD ["npm", "run", "preview", "--", "--port", "1007", "--host"]
