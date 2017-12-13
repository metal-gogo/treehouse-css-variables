import React from 'react';
import PropTypes from 'prop-types';

const CanIUse = (props, context) => {
  const { feature, versions } = props;
  const embedRoot = 'https://caniuse.bitsofco.de/embed/index.html';
  const embedURL = `${embedRoot}?feat=${feature}&periods=${versions.join(',')}`;

  return (
    <div className="caniuse">
      <iframe
        src={embedURL}
        title={`Can I use for ${feature}`}
        frameBorder="0"
        width="100%"
        height="424px"
      />
    </div>
  );
};

CanIUse.propTypes = {
  feature: (props, propName, componentName) => {
    if (
      !/css-first-letter|css-placeholder|css-selection|css-default-pseudo|css-has|css-in-out-of-range|css-indeterminate-pseudo|css-matches-pseudo|css-optional-pseudo|css-placeholder-shown|fontface|aac|input-file-accept|ambient-light|apng|arrow-functions|asmjs|script-async|audiotracks|audio|input-autocomplete-onoff|autofocus|background-position-x-y|atob-btoa|console-basic|battery-status|beacon|css-mixblendmode|bloburls|blobbuilder|broadcastchannel|brotli|css-sel2{4}|css-animation|css-appearance|css-backdrop-filter|css-canvas|css-at-counter-style|css-counters|css-cross-fade|css-deviceadaptation|css-exclusions|css-featurequeries|css-filters|font-loading|css-gencontent|css-gradients|css-grid|css-hyphens|css-logical-props|css-masks|css-motion-paths|css-reflections|css-regions|css-repeating-gradients|css-snappoints|css-shapes|css-table|css-variables|css-all|background-attachment|css-backgroundblendmode|css-background-offsets|css-boxdecorationbreak|css-clip-path|currentcolor|css-element-function|css-filter-function|font-feature|font-size-adjust|font-smooth|css-font-stretch|font-variant-alternates|css-image-set|css-initial-value|inline-block|css-line-clamp|minmaxwh|outline|css-page-break|pointer-events|css-fixed|css-sticky|css-resize|css-revert-value|css-scrollbar|css-text-justify|text-size-adjust|text-stroke|css-touch-action|css-unset-value|user-select-none|css-widows-orphans|will-change|css-writing-mode|css-zoom|css-supports-api|transforms2d|transforms3d|background-img-opts|border-image|border-radius|css-boxshadow|css3-boxsizing|css3-colors|css3-cursors|css3-cursors-newer|css-mediaqueries|multibackgrounds|multicolumn|css-opacity|wordwrap|text-overflow|css-textshadow|css-transitions|font-kerning|css-image-orientation|object-fit|css-sel3|css3-tabsize|css-text-align-last|word-break|css-scroll-behavior|calc|canvas|canvas-blending|css-case-insensitive|channel-messaging|classlist|client-hints-dpr-width-viewport, Width, Viewport-Width|clipboard|input-color|const|contentsecuritypolicy|contentsecuritypolicy2|contenteditable|css-crisp-edges|cors|x-doc-messaging|getrandomvalues|custom-elements|registerprotocolhandler|customevent|xml-serializer|domcontentloaded|datauri|datalist|dataset* attributes|input-datetime|script-defer|details|deviceorientation|dialog|fieldset-disabled|dom-range|document-currentscript|document-execcommand|documenthead|download|dragndrop|es5|use-strict|eot|es6-number|setimmediate|element-closest|getboundingclientrect|insertadjacenthtml|input-email-tel-url, telephone &amp; URL input types|addeventlistener|dispatchevent|css-descendant-gtgt|u2f|fetch|fileapi|filereader|filesystem|flexbox|focusin-focusout-events|font-unicode-range|form-attribute|form-validation|fullscreen|gamepad|geolocation|getcomputedstyle|getelementsbyclassname|stream|imports|template|forms|http2|hashchange|hidden|high-resolution-time|kerning-pairs-ligatures|indexeddb|svg-html5|ime|input-event|input-placeholder|internationalization|intrinsic-width|jpeg2000|jpegxr|json|keyboardevent-charcode|keyboardevent-code|keyboardevent-getmodifierstate|keyboardevent-key|keyboardevent-location|keyboardevent-which|let|css-letter-spacing|mp3|mpeg4|matchmedia|matchesselector|mathml|maxlength|css-media-interaction|css-media-resolution|mediasource|meter|input-minlength|input-file-multiple|mutationobserver|nav-timing|netinfo|html5semantic|innertext|textcontent|input-number|objectrtc|object-observe|offline-apps|ogg-vorbis|ogv|online-status|opus|png-alpha|link-icon-png|pagevisibility|page-transition-events|input-pattern|permissions-api|picture|pointer|pointerlock|progress|promises|proximity|proxy|publickeypinning|push-api|queryselector|input-range|referrer-policy|rel-noopener=noopener|rellist|rem|requestanimationframe|lazyload|link-rel-dns-prefetch|link-rel-preconnect|link-rel-prefetch|link-rel-preload|link-rel-prerender|resource-timing|rest-parameters|ol-reversed|ruby|spdy|svg|svg-smil|svg-html|link-icon-svg|svg-filters|svg-fonts|svg-fragment|svg-css|svg-img|iframe-sandbox|style-scoped|screen-orientation|scrollintoview|iframe-seamless|input-search|css-not-sel-list|css-nth-child-of|sni|eventsource|serviceworkers|history|shadowdom|sharedworkers|speech-recognition|speech-synthesis|spellcheck-attribute|iframe-srcdoc|srcset|stricttransportsecurity|subresource-integrity|ttf|canvas-text|text-decoration|text-emphasis|menu|touch|typedarrays|upgradeinsecurerequests|user-timing|vibration|videotracks|video|viewport-units, vh, vmin, vmax|wai-aria|woff|woff2|wav|wbr-element|web-animation|audio-api|web-bluetooth|cryptography|midi|notifications|sql-storage|websockets|namevalue-storage|webworkers|webgl|webgl2|webm|webp|rtcpeerconnection|webvtt|devicepixelratio|xhtml|xhtmlsmil|xhr2/.test(
        props[propName]
      )
    ) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`
      );
    }
  },
  versions: PropTypes.array
};

CanIUse.defaultProps = {
  versions: ['future_2', 'future_1', 'current', 'past_1', 'past_2']
};

export default CanIUse;
