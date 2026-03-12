import type { ActivityRecord } from "@/widgets/activity/model/types";
import { ActivityItem } from "./ActivityItem";

type ActivityListProps = {
  activities: ActivityRecord[];
  onSelect?: (activity: ActivityRecord) => void;
};

export function ActivityList({ activities, onSelect }: ActivityListProps) {
  return (
    <div className="space-y-2">
      {activities.map((a) => (
        <ActivityItem key={a.id} activity={a} onSelect={onSelect} />
      ))}
    </div>
  );
}
