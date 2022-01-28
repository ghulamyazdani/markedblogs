import React from "react";
import IconTwitter from "./Icons/twitter";
import IconFacebook from "./Icons/Facebook";
import IconLinkedin from "./Icons/Linkedin";
import IconWhatsapp from "./Icons/Whatsapp";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
export default function share({ slug }: any): JSX.Element {
  return (
    <div className="share flex flex-col mr-6 mt-16">
      <p className="text-center">Share this</p>
      <TwitterShareButton
        title={slug}
        url={"/blog/" + slug}
        hashtags={[slug]}
        className="Demo__some-network__share-button"
      >
        <IconTwitter className="h-10 w-10 mx-auto m-2 hover:text-[#1DA1F2]" />
      </TwitterShareButton>
      <LinkedinShareButton
        title={slug}
        url={"/blog/" + slug}
        className="Demo__some-network__share-button"
      >
        <IconLinkedin className="h-10 w-10 mx-auto m-2 hover:text-[#006192]" />
      </LinkedinShareButton>
      <FacebookShareButton
        url={"/blog/" + slug}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#" + slug}
        className="Demo__some-network__share-button"
      >
        <IconFacebook className="h-10 w-10 mx-auto m-2 hover:text-[#3b5998]" />
      </FacebookShareButton>
      <WhatsappShareButton
        url={"/blog/" + slug}
        className="Demo__some-network__share-button"
      >
        <IconWhatsapp className="h-10 w-10 mx-auto m-2 hover:text-[#25D366]" />
      </WhatsappShareButton>
    </div>
  );
}
