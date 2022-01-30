---
authors: viagogo
tags: [tls, deprecation, breaking-change]
---

# TLS v1.0 Deprecation Notice

viagogo will be disabling support for TLS v1.0 on our public facing api. We are providing advanced notice so that our customers and partners can prepare accordingly. If you are using unsupported clients to connect to the viagogo API after disabling TLS v1.0, you will begin receiving connection error messages.

:::warning

**Possible breaking change**
This change is a possible breaking change to clients that connect to our API using Tls1.0.

:::

## Why are we disabling TLS v1.0?

We are disabling TLS v1.0 to ensure that viagogo software is providing our customers and partners with safe and secure protocols for our connections. This change is enforced throughout the industry to maintain secure connections that encrypt and protect your sensitive data from malicious breaches. The PCI Security Standards Council updated their guidance and will now require full deprecation of TLS 1.0  for applications that process payments. Although, we only support payments on the viagogo website application, we will be following the recommendation across all our inbound connections.

## Am I affected?

Customers that have custom clients and are using clients that do not support TLS v1.1 and above will no longer be able to successfully connect to our public API.

Customer should ensure that they are using a supported client or else it will lead to downtime of any internal processes that utilize the viagogo API.

viagogo will be performing analysis of connections to our public API and performing proactive communications to affected customer to ensure a smooth transition.  We still recommend that our customers do not rely solely on us to reach out to them, each customer that utilizes these APIs should ensure that they are prepared for the deprecation date.

You can use the following API to easily test the library you are using for API connections to viagogo to ensure it supports TLS v1.1 or greater.

[https://www.howsmyssl.com/a/check](https://www.howsmyssl.com/a/check)

The HTTP response will contain a `tls_version` value which contains the highest version of TLS that is supported by the client.
