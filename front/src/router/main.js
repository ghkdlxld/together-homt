import Main from "@/views/Main";
<<<<<<< HEAD
import Feed from "@/views/main/feed/Feed"; //뉴스 피드 조회
import CommentPage from "@/views/main/feed/CommentPage"; //댓글리스트
import LikeListPage from "@/views/main/feed/LikeListPage"; //좋아요 페이지
=======
import Feed from "@/views/main/feed/Feed";
import CommentPage from "@/views/main/feed/CommentPage";
import LikeListPage from "@/views/main/feed/LikeListPage";
>>>>>>> user_page
import SearchPage from "@/views/main/SearchPage";
import Register from "@/views/main/Register";
import ExerciseList from "@/views/main/exercise/ExerciseList";
import MotionDetect from "@/views/main/exercise/MotionDetect";

import Profile from "@/views/main/profile/Profile"; // 프로필 페이지
import Calendar from "@/views/main/profile/Calendar"; // 캘린더 페이지
import ProfileEdit from "@/views/main/profile/ProfileEdit"; // 프로필 편집 페이지
import PasswordEdit from "@/views/main/profile/PasswordEdit"; // 비밀번호 변경 페이지
import ProfileFeedDetail from "@/views/main/profile/ProfileFeedDetail"; // 프로필 피드 상세 페이지
import Follow from "@/views/main/Follow"; // 팔로우 페이지
import ProfileFeedComment from "@/views/main/profile/ProfileFeedComment"; // 프로필 피드 댓글 페이지
import ProfileFeedLike from "@/views/main/profile/ProfileFeedLike"; // 프로필 피드 좋아요 페이지

export default {
  // MainPage : 피드, 검색, (피드)등록, 운동, 프로필
  path: "/main",
  name: "Main",
  component: Main,
  children: [
    {
      name: "Feed",
      path: "feed",
      component: Feed,
    },
    {
      name: "CommentPage",
<<<<<<< HEAD
      path: "feed/CommentPage/:feedId",
      component: CommentPage,
      props: {
        default: true,
      },
    },
    {
      name: "LikeListPage",
      path: "feed/LikeListPage/:feedId",
      component: LikeListPage,
      props: {
        default: true,
      },
=======
      path: "feed/comment",
      component: CommentPage,
    },
    {
      name: "LikeListPage",
      path: "feed/likelistpage",
      component: LikeListPage,
>>>>>>> user_page
    },
    {
      name: "Search",
      path: "search",
      component: SearchPage,
    },
    {
      name: "Register",
      path: "register",
      component: Register,
    },
    {
      name: "Exercise",
      path: "exercise",
      component: ExerciseList,
    },
    {
      name: "MotionDetect",
      path: "motiondetect",
      component: MotionDetect,
    },
    {
      name: "Profile",
      path: "profile/:userName/:email",
      component: Profile,
      props: {
        default: true,
      },
    },
    {
      name: "Follow",
      path: "profile/:follow/:userName/:email",
      component: Follow,
      props: {
        default: true,
      },
    },
    {
      name: "ProfileEdit",
      path: "profile/edit",
      component: ProfileEdit,
    },
    {
      name: "PasswordEdit",
      path: "profile/password",
      component: PasswordEdit,
    },
    {
      name: "Calendar",
      path: "calendar/:userName/:email",
      component: Calendar,
      props: {
        default: true,
      },
    },
    {
      name: "ProfileFeedDetail",
      path: "profile/feed/:userName/:email:/:feedId",
      component: ProfileFeedDetail,
      props: {
        default: true,
      },
    },
    {
      name: "ProfileFeedComment",
      path: "profile/feed/comment/:userName/:email:/:feedId/:index",
      component: ProfileFeedComment,
      props: {
        default: true,
      },
    },
    {
      name: "ProfileFeedLike",
      path: "profile/feed/like/:userName/:email:/:feedId/:index",
      component: ProfileFeedLike,
      props: {
        default: true,
      },
    },
  ],
};
