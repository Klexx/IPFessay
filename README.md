IPFessay
========

IPFessay is an application that runs on [IPFS](https://ipfs.io/) and allows you
to publish uncensorable essays to it. It supports Markdown for composition and
lets you write and publish essays right from your browser, with no extra
software or servers.

As long as IPFS is up, you'll be able to use IPFessay to publish texts to IPFS.

To use IPFessay, you need to do a few things, unfortunately:

* [Install IPFS](https://ipfs.io/docs/install/) (just copy the binary somewhere
  and run it).
* Launch the daemon in writable mode (`ipfs daemon --writable`).
* Add the [CORS headers](https://github.com/ipfs/js-ipfs-api#cors) (an
  unfortunate necessity).
* Visit the following link:

[/ipfs/QmP2oQ5HcXAD6FjFFDiaAdpAGpzwA1P4KCVDBD4Nn9NDWU](http://localhost:8080/ipfs/QmP2oQ5HcXAD6FjFFDiaAdpAGpzwA1P4KCVDBD4Nn9NDWU)

You can see a (non-functional) version of IPFessay on ipfs.io:

[/ipfs/QmP2oQ5HcXAD6FjFFDiaAdpAGpzwA1P4KCVDBD4Nn9NDWU](https://ipfs.io/ipfs/QmP2oQ5HcXAD6FjFFDiaAdpAGpzwA1P4KCVDBD4Nn9NDWU)

And a sample essay:

[/ipfs/QmWFSuFDaApxK6DaBzEXdSXhb325fQY1hHn7Jc32DS77UK](https://ipfs.io/ipfs/QmWFSuFDaApxK6DaBzEXdSXhb325fQY1hHn7Jc32DS77UK)

The above links are immutable, ie they will always point to the same version of
IPFessay, even if there is a later version available.

For a link to the latest version of IPFessay, use this:

[/ipns/QmSWnBwMKZ28tcgMFdihD8XS7p6QzdRSGf71cCybaETSsU](/ipns/QmSWnBwMKZ28tcgMFdihD8XS7p6QzdRSGf71cCybaETSsU)


Contributing
------------

### Pinning

If you have a local IPFS daemon, please feel free to help out by pinning
a version of IPFessay. You can very easily do this by running:

~~~
ipfs pin add QmP2oQ5HcXAD6FjFFDiaAdpAGpzwA1P4KCVDBD4Nn9NDWU
~~~

Which will make you a host of IPFessay and help make it faster and more
resilient.


### Code contributions

Please feel free to open an issue or a merge request if you find something that
can be improved or have any suggestions.

Thanks!

-- Stavros
