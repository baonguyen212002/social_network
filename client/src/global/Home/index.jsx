import { currentUser } from "../../common/data/current_user";
import { listPosts } from "../../common/data/list_posts";
import { ButtonLink } from "../../components/button_link";
import { ItemRow } from "../../components/item_row";
import { ListSuggestion } from "../../components/list_suggestions";
import PostItem from "../../components/post_item";
import UserStories from "../../components/user_stories";
import styles from "./styles.module.css";

export default function HomePage(){
  return (
    <div className="flex flex-row justify-center pb-16">
      <div className={`${styles.container_feed}`}>
        {/* List Stories */}
        <UserStories />

        {listPosts && listPosts.map((e) => <PostItem post={e} key={e.id} />)}
      </div>
      <div className={`${styles.suggestions}`}>
        <ItemRow
          url={currentUser.avatar}
          title={currentUser.userName}
          subTitle={currentUser.displayName}
          rightItem={
            <ButtonLink textBtn="Switch" onClick={() => console.log("")} />
          }
        />
        <div className="flex flex-row justify-between">
            <p className="font-bold text-secondary-text text-[14px]">
              Suggestions For You
            </p>
            <button className="text-xs font-bold" >
              See All
            </button>
        </div>

        <ListSuggestion />
      </div>
    </div>
  );
}
