FROM cockroachdb/cockroach:latest-v23.2

EXPOSE 26257 8080

CMD ["start-single-node", "--insecure", "--http-addr=0.0.0.0:8080"]