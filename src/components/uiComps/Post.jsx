import React from "react";
import Image from "next/image";
import { FaGlobeAmericas } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Comments from "./Comments";
import { TbArrowsUpRight } from "react-icons/tb";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoCameraOutline, IoSendOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import Cookies from "universal-cookie";
import CommentReply from "./CommentReply";

export default function Post({ post }) {
  const cookies = new Cookies();
  const token = cookies.get("access_token");
  const [showMoreComments, setShowMoreComments] = React.useState(false);
  const [showReaction, setShowReaction] = React.useState(false);
  const [commentText, setCommentText] = React.useState("");
  const [postComments, setPostComments] = React.useState([]);
  const [reactionCount, setReactionCount] = React.useState(0);
  const [viewReply, setViewReply] = React.useState(false);

  const commentRef = React.useRef();

  React.useEffect(() => {
    setReactionCount(post?.reactionCount);
    setPostComments(post?.comments);
  }, [post?.comments, post?.reactionCount]);

  const handlePostReaction = (postId, reaction_type) => {
    // console.log("668979e6ead17d642758c7db", postId, reaction);
    setReactionCount((prev) => prev + 1);
    if (token) {
      fetch("https://quantumpossibilities.eu:82/api/save-reaction-main-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          post_id: postId,
          reaction_type: reaction_type,
          user_id: "668979e6ead17d642758c7db",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setShowReaction(false);
        });
    }
  };
  const handlePostComment = (postId) => {
    const newComment = {
      comment_name: commentText,
      user_id: {
        first_name: "Maynul",
        last_name: "Islam",
      },
      comment_type: "main_comment",
    };
    setPostComments([...postComments, newComment]);

    if (token) {
      fetch("https://quantumpossibilities.eu:82/api/save-user-comment-by-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          post_id: postId,
          comment_name: commentText,
          user_id: "668979e6ead17d642758c7db",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setCommentText("");
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setShowReaction(false);
        });
    }
  };
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="bg-white rounded-sm">
        <section className="flex items-center justify-between py-3 px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer">
              <Image width={40} height={40} src={"/avatar/oval-3.png"} alt="user profile" />
            </div>
            <div>
              <p className="text-neutral font-semibold cursor-pointer hover:underline">
                {post?.user_id?.first_name + " " + post?.user_id?.last_name}
              </p>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-neutral">1h</span>
                <span className="text-[6px] text-neutral">●</span>
                <span>
                  <FaGlobeAmericas />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-neutral">
            <p className="text-[10px] cursor-pointer">● ● ●</p>
            <div className="flex items-center justify-center border-[1px] border-neutral w-6 h-6 rounded-full cursor-pointer">
              <RxCross2 />
            </div>
          </div>
        </section>
        <section className="text-neutral px-4 py-2">{post?.description}</section>
        <section>
          <Image width={500} height={400} src={"/post.jpg"} alt="posted photo" className="w-full" />
        </section>
        <section className="flex items-center justify-between py-2 px-4">
          {reactionCount ? (
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="flex">
                <Image
                  width={18}
                  height={18}
                  src={"/icons/haha_emoji.png"}
                  alt="haha emoji"
                  className="z-20"
                />
                <Image
                  width={18}
                  height={18}
                  src={"/icons/love_emoji.png"}
                  alt="love emoji"
                  className="ml-[-4px] z-10"
                />
              </div>
              <span>{reactionCount}</span>
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-[#6A6A6B]">30</span>
              <Image
                width={10}
                height={10}
                src={"/icons/comment.png"}
                alt="comment"
                className="h-4 w-4"
              />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-[#6A6A6B]">30</span>
              <Image
                width={10}
                height={10}
                src={"/icons/share.png"}
                alt="share"
                className="h-4 w-4"
              />
            </div>
          </div>
        </section>
        <section className="flex items-center justify-between text-[#6A6A6B] px-6 pt-4 pb-3">
          <div className="relative w-full">
            <div
              className="flex items-center gap-1 cursor-pointer font-medium hover:text-neutral"
              onClick={() => setShowReaction(!showReaction)}
            >
              <Image
                width={20}
                height={20}
                src={"/icons/like.png"}
                alt="like"
                className="h-5 w-5"
              />
              <p>Like</p>
            </div>
            {showReaction && (
              <div className="flex items-center gap-[2px] bg-white cursor-pointer p-1 rounded-full shadow-xl absolute top-[-30px] border-[1px] border-neutral z-30">
                <Image
                  width={20}
                  height={20}
                  src={"/icons/like-2.png"}
                  alt="like emoji"
                  onClick={() => handlePostReaction(post?._id, "like")}
                />
                <Image
                  width={18}
                  height={18}
                  src={"/icons/haha_emoji.png"}
                  alt="haha emoji"
                  onClick={() => handlePostReaction(post?._id, "haha")}
                />
                <Image
                  width={20}
                  height={20}
                  src={"/icons/heart.png"}
                  alt="love emoji"
                  onClick={() => handlePostReaction(post?._id, "love")}
                />
              </div>
            )}
          </div>
          <p
            className="cursor-pointer font-medium hover:text-neutral w-full text-center"
            onClick={() => {
              if (commentRef?.current) {
                commentRef?.current?.focus();
              }
            }}
          >
            Comment
          </p>
          <p className="cursor-pointer font-medium hover:text-neutral w-full text-right">Share</p>
        </section>
      </div>
      <div className="bg-white rounded-sm py-4 px-6">
        <h4
          className="inline-block text-neutral font-semibold cursor-pointer hover:underline"
          onClick={() => setShowMoreComments(!showMoreComments)}
        >
          {showMoreComments ? "View less comments" : "View more comments"}
        </h4>
        <section className="my-2 flex flex-col gap-2">
          <div className="flex gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer">
              <Image width={40} height={40} src={"/avatar/oval-2.png"} alt="user profile" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <div className="w-full bg-[#F0F2F5] p-4 text-neutral rounded-xl relative">
                  <p className="font-semibold cursor-pointer hover:underline">
                    Quantum Posibilities
                  </p>
                  <p className="text-sm mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a laoreet tortor.
                    Duis malesuada nunc sed faucibus pellentes Proin odio nulla, rhoncus in dictum
                    in, tincidunt vel l
                  </p>
                  <div className="flex items-center gap-[2px] bg-white cursor-pointer w-fit p-[2px] rounded-full shadow-lg absolute bottom-[-12px] right-10">
                    <div className="flex">
                      <Image
                        width={18}
                        height={18}
                        src={"/icons/like-2.png"}
                        alt="like emoji"
                        className="z-20"
                      />
                      <Image
                        width={18}
                        height={18}
                        src={"/icons/heart.png"}
                        alt="love emoji"
                        className="ml-[-4px] z-10"
                      />
                    </div>
                    <span className="text-sm">120</span>
                  </div>
                </div>
                <div className="w-7 h-7 bg-[#F0F2F5] rounded-full flex justify-center items-center">
                  <p className="text-[8px] text-[#999999] cursor-pointer whitespace-nowrap">
                    ● ● ●
                  </p>
                </div>
              </div>
              <div className="flex gap-5 text-neutral text-sm font-semibold py-1 px-5">
                <span>1 h</span>
                <span>Like</span>
                <span>Reply</span>
              </div>
              <div>
                {viewReply ? (
                  <div>
                    <div className=" cursor-pointer" onClick={() => setViewReply(false)}>
                      <span className="text-sm hover:underline">Hide Replay</span>
                    </div>
                    <CommentReply reply={{}} />
                  </div>
                ) : (
                  <div className="flex items-end cursor-pointer" onClick={() => setViewReply(true)}>
                    <TbArrowsUpRight size={24} />
                    <span className="text-sm hover:underline">View 1 Replay</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          {postComments?.slice(0, showMoreComments ? postComments.length : 1)?.map((comment) => (
            <Comments key={comment?._id} comment={comment} />
          ))}
        </section>
        <section className="flex items-center gap-3 py-2 mt-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer">
            <Image width={40} height={40} src={"/avatar/reply_image.png"} alt="user profile" />
          </div>
          <div className="flex items-center justify-between gap-2 h-12 w-full bg-[#F0F2F5] rounded-md px-3">
            <input
              type="text"
              ref={commentRef}
              value={commentText}
              placeholder="Write a public comment..."
              className="bg-transparent h-full w-full focus:outline-none text-neutral"
              onChange={(e) => setCommentText(e.target.value)}
            />
            {commentText ? (
              <div
                onClick={(e) => {
                  handlePostComment(post?._id);
                }}
              >
                <div className="cursor-pointer hover:text-neutral">
                  <IoSendOutline size={22} />
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <div className="cursor-pointer hover:text-neutral">
                  <HiOutlineEmojiHappy size={22} />
                </div>
                <div className="cursor-pointer hover:text-neutral">
                  <IoCameraOutline size={22} />
                </div>
                <div className="cursor-pointer hover:text-neutral">
                  <MdOutlineGifBox size={22} />
                </div>
                <div className="cursor-pointer hover:text-neutral">
                  <CiImageOn size={22} />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
