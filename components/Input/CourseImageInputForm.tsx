"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Course } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";

type FormProps = {
  onBack: () => void;
  submitForm: (data: any) => void;
  formData?: Course;
};

const formSchema = z.object({
  imageUrl: z.string(),
});

const CourseImageForm = ({ onBack, formData }: FormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadURL, setUploadURL] = useState();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
    },
  });

  const imgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    setLoading(true);

    const file = e.target.files![0];

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(
      storage,
      "course-images/" + file.name + Date.now().toString()
    );
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error: any) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            setLoading(false);
            console.log("unauthorised error");
            break;
          case "storage/canceled":
            // User canceled the upload
            setLoading(false);
            console.log("cancelled error");
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            setLoading(false);
            console.log("unknown error");
            break;

          default:
            setLoading(false);
            console.log("error in uploading img");
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
          setUploadURL(downloadURL);
          // setFormState((prev) => ({
          //   ...prev,
          //   images: [...prev.images, downloadURL],
          // }));

          setLoading(false);
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const submitForm = async () => {
    //SUBMIT TO B/E
    if (!uploadURL) {
      return;
    }
    setLoading(true);

    try {
      let data = { ...formData, price: +formData!.price, imageUrl: uploadURL };
      const res = await fetch("/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const courseData = await res.json();

      if (res.ok) {
        router.push(`/teacher/courses/${courseData.id}`);
      } else {
        //TODO:HANDLE ERRORS
        setLoading(false);
        console.log("sometghing went wrong");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Skeleton className="w-full h-[20px] rounded-full" />
      ) : (
        <>
          {!uploadURL ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(submitForm)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Banner</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Course Price"
                          {...field}
                          onChange={imgChangeHandler}
                          type="file"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <div className="flex gap-4 mt-8">
                  <Button variant={"outline"} onClick={onBack}>
                    Back
                  </Button>
                  <Button type="submit">Next</Button>
                </div> */}
              </form>
            </Form>
          ) : (
            <>
              <Card>
                <CardContent>
                  <Image
                    src={uploadURL}
                    alt="Course Banner"
                    width={200}
                    height={200}
                    className="w-full object-contain"
                  />
                </CardContent>
              </Card>
              <div className="flex gap-4 mt-8">
                <Button variant={"outline"} onClick={onBack}>
                  Back
                </Button>
                <Button type="submit" onClick={submitForm}>
                  Next
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CourseImageForm;

<></>;
