import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

function CartList({ title }: { title: string }) {
  const latestTransactions = [
    {
        id:1,
        title:"Payment of Services",
        badge:"Fulfilled",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1500,
        memberName:"John Doe"
    },
    {
        id:2,
        title:"Subscription Renewal",
        badge:"Pending",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1300,
        memberName:"John Doe"
    },
    {
        id:3,
        title:"Subscription Renewal",
        badge:"Fulfilled",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1100,
        memberName:"John Doe"
    },
    {
        id:4,
        title:"Payment of Services",
        badge:"Fulfilled",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1600,
        memberName:"John Doe"
    },
    {
        id:5,
        title:"Payment of Services",
        badge:"Pending",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1800,
        memberName:"John Doe"
    }
  ];
  const popularCourses = [
    {
        id:1,
        title:"Front-end Development",
        badge:"Highest Sales",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1500,
        category: 'Web Application'
    },
    {
        id:2,
        title:"Back-end Development",
        badge:"Trending",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1300,
        category: 'Web Application'
    },
    {
        id:3,
        title:"Amazon Web Services",
        badge:"Latest",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1100,
        category: 'Web Application'
    },
    {
        id:4,
        title:"Generative AI",
        badge:"Highest Sales",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1600,
        category: 'Web Application'
    },
    {
        id:5,
        title:"Data Science with Python",
        badge:"Trending",
        image: 'https://cdn.shopify.com/s/files/1/0746/1227/7491/files/Untitled_design_92.png?v=1745648492',
        count: 1800,
        category: 'Web Application'
    }
  ];

  const list = title === "Latest Transactions" ? latestTransactions : popularCourses;
  return (
    <div className="card-list-container">
      <h2 className="font-medium text-lg mb-6">{title}</h2>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card className="flex flex-row items-center justify-items-start w-full p-2 gap-3" key={item.id}>
            <div className="card-img-wrapper w-12 h-12 flex items-center justify-center relative overflow-hidden rounded-sm">
                <Image src={item.image} alt={item.title} fill className="object-cover"/>
            </div>
            <CardContent className="flex flex-col flex-1 items-start justify-between p-0 gap-2">
                <CardTitle className="text-xs font-semibold">{item.title}</CardTitle>
                <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="flex flex-0 items-center justify-between text-sm">{item.count / 1000}K </CardFooter>
          </Card>
        ))}
      </div>
      
    </div>
  );
}

export default CartList;
