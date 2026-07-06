import mongoose, { Schema } from 'mongoose';

import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const VideoSchema   = new Schema(
    {
        videoFile: {
            type: String, //cloudnery url
            required: true,

        },

        thumbnail: {
            type: String, //cloudnery url
            required: true,
            
        },

        title: {
            type: String, 
            required: true,
            
        },
        description: {
            type: String, 
            required: true,
            
        },
        duration: {
            type: Number, 
            required: true,
            
        },
        views: {
            type: Number,
            default: 0
        },
        isPuublished: {
            type: Boolean,
            default: true,
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User",
        }

    },
    {
        timestamps: true
    }
)

VideoSchema.plugin(mongooseAgeergatePaginate);  

export const Video = mongoose.model('Video', VideoSchema);