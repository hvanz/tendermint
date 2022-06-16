(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{661:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-012-abci-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-012-abci-events"}},[e._v("#")]),e._v(" ADR 012: ABCI Events")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("2018-09-02")]),e._v(" Remove ABCI errors component. Update description for events")]),e._v(" "),a("li",[a("em",[e._v("2018-07-12")]),e._v(" Initial version")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("ABCI tags were first described in "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-002-event-subscription.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 002"),a("OutboundLink")],1),e._v(".\nThey are key-value pairs that can be used to index transactions.")]),e._v(" "),a("p",[e._v('Currently, ABCI messages return a list of tags to describe an\n"event" that took place during the Check/DeliverTx/Begin/EndBlock,\nwhere each tag refers to a different property of the event, like the sending and receiving account addresses.')]),e._v(" "),a("p",[e._v("Since there is only one list of tags, recording data for multiple such events in\na single Check/DeliverTx/Begin/EndBlock must be done using prefixes in the key\nspace.")]),e._v(" "),a("p",[e._v('Alternatively, groups of tags that constitute an event can be separated by a\nspecial tag that denotes a break between the events. This would allow\nstraightforward encoding of multiple events into a single list of tags without\nprefixing, at the cost of these "special" tags to separate the different events.')]),e._v(" "),a("p",[e._v("TODO: brief description of how the indexing works")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("Instead of returning a list of tags, return a list of events, where\neach event is a list of tags. This way we naturally capture the concept of\nmultiple events happening during a single ABCI message.")]),e._v(" "),a("p",[e._v("TODO: describe impact on indexing and querying")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Implemented")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Ability to track distinct events separate from ABCI calls (DeliverTx/BeginBlock/EndBlock)")]),e._v(" "),a("li",[e._v("More powerful query abilities")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("More complex query syntax")]),e._v(" "),a("li",[e._v("More complex search implementation")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")])])}),[],!1,null,null,null);t.default=n.exports}}]);