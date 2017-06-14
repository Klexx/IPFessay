IPFessay
========

IPFessay is an application that runs on [IPFS](https://ipfs.io/) and allows you
to publish uncensorable essays to it. It supports Markdown for composition and
lets you write and publish essays right from your browser, with no extra
software or servers.

As long as IPFS is up, you'll be able to use IPFessay to publish texts to IPFS.

To use IPFessay, you need to do a few things, unfortunately:

* [Install IPFS](https://ipfs.io/docs/install/).
* Launch the daemon in writable mode (`ipfs daemon --writable`).
* Add the [CORS headers](https://github.com/ipfs/js-ipfs-api#cors) (an
  unfortunate necessity).
* Visit the following link:

[/ipfs/Qmbd46FWF9ejWLNHhT7HyJqE6g2HYR7jubVdeCe4RS6Zt1](http://localhost:8080/ipfs/Qmbd46FWF9ejWLNHhT7HyJqE6g2HYR7jubVdeCe4RS6Zt1)

You can see a (non-functional) version of IPFessay on ipfs.io:

[/ipfs/Qmbd46FWF9ejWLNHhT7HyJqE6g2HYR7jubVdeCe4RS6Zt1](https://ipfs.io/ipfs/Qmbd46FWF9ejWLNHhT7HyJqE6g2HYR7jubVdeCe4RS6Zt1)

And a sample essay:

[/ipfs/QmWL1ZC2uAe2SLeiJK8Bj6P7RSsueBmhMZgjFPg87T1gDa](https://ipfs.io/ipfs/QmWL1ZC2uAe2SLeiJK8Bj6P7RSsueBmhMZgjFPg87T1gDa)


Contributing
------------

### Pinning

If you have a local IPFS daemon, please feel free to help out by pinning
a version of IPFessay. You can very easily do this by running:

~~~
ipfs pin add Qmbd46FWF9ejWLNHhT7HyJqE6g2HYR7jubVdeCe4RS6Zt1
~~~

Which will make you a host of IPFessay and help make it faster and more
resilient.


### Code contributions

Please feel free to open an issue or a merge request if you find something that
can be improved or have any suggestions.

Thanks!

-- Stavros
