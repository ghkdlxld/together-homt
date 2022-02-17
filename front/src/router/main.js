import MainPage from "@/views/MainPage";
import Feed from "@/components/Feed";
import UserPage from "@/components/UserPage";
import FollowPage from "@/components/FollowPage";
import UserEditPage from "@/components/UserEditPage";
import CalendarPage from "@/components/CalendarPage";
import RegisterFeedPage from "@/components/RegisterFeedPage";
import ChangePasswordPage from "@/components/ChangePasswordPage";

export default {
  path: "/homet",
  component: MainPage,
  children: [
    {
      name: "Feed",
      path: "feed",
      component: Feed,
    },
    {
      name: "UserPage",
      path: ":userName",
      component: UserPage,
      props: {
        default: true,
      },
    },
    {
      name: "FollowPage",
      path: "follow/:userName",
      component: FollowPage,
      props: {
        default: true,
      },
    },
    {
      name: "UserEditPage",
      path: "edit/:userName",
      component: UserEditPage,
      props: {
        default: true,
      },
    },
    {
      name: "CalendarPage",
      path: "calendar/:userName",
      component: CalendarPage,
      props: {
        default: true,
      },
    },
    {
      name: "RegisterFeedPage",
      path: "feed/create/:userName",
      component: RegisterFeedPage,
      props: {
        default: true,
      },
    },
    {
      name: "ChangePasswordPage",
      path: "/pw/:userName",
      component: ChangePasswordPage,
      props: {
        default: true,
      },
    },
  ],
};